"use strict";

const mongoose = require("mongoose");
const metiers = require("../services/metiers");
const dbServices = require("../services/database");
const myVar = require("../config/variables.js");
const _ = require("underscore");
const responseMsg = myVar.httpMessage.response;


const schema = mongoose.Schema;
const poemSchema = schema({
	title: String,
	content: String,
	from: String,
	author: { type: schema.Types.ObjectId, ref: "users" },
	denounced: Boolean,
	isPublic: Boolean,
	created_at: Date,
	update_at: Date,
	histo: Boolean,
	rubric: String,
	tof: String
});

const poemSchemaValidator = {
	type : "object",
	properties :{
		title: {type : "string", required : true},
		content: {type : "string", required : true},
		author: {type : "string", required : true},
		rubric: {type : "string", required : true},
		tof:{type : "string",required : true},
		from: {type : "string", required : false},
	},
	additionalProperties : false
};

const poemDbAccess = mongoose.model("poem", poemSchema);

function create (req, res) {
	var poemToCreateModel = fillPoemModel(req.body);
	if (!poemToCreateModel) {
		return metiers.quitWithFailure(req, res, responseMsg.failure.invalidSchema, 500);
	}
	var poemToCreate = new poemDbAccess(poemToCreateModel);
	return dbServices.post(req, res, poemToCreate);
}

function getAll(req, res){
	poemDbAccess.find({ $query: {}, $orderby: { created_at: -1 } })
	.populate("author","lastname firstname")
		.then((poems) => {
			return res.status(201).json({
				code : 201,
				message : responseMsg.success.successMessage,
				result : poems
			});
		})
		.catch(() => {
			return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage, 500);
		});
}

function get(req, res){
	poemDbAccess.findById(req.params.id)
	.populate("author", "lastname firstname")
	.exec()
	.then((poem) => {
		return res.status(200).json({
			code : 200,
			message : responseMsg.success.successMessage,
			result : poem
		});
	})
	.catch(() => {
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage, 500);
	});
}

function getLastPoemes(req, res) {
	poemDbAccess.find({ $query: {}, $orderby: { created_at: -1 } })
	.populate("author","lastname firstname")
	.limit(10)
	.then((poems) => {
		return res.status(201).json({
			code : 201,
			message : responseMsg.success.successMessage,
			result : poems
		});
	})
	.catch(() => {
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage, 500);
	});
}

function getByLabel(req, res) {
	const query = {};
	query[req.query.key] =  req.query.value;

	poemDbAccess.find(query)
	.populate("author", "lastname firstname")
	.then((poems) => {
		return res.status(201).json({
			code : 201,
			message : responseMsg.success.successMessage,
			result : poems
		});
	})
	.catch(() => {
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage, 500);
	});
}

function deletePoem(req, res){
	return dbServices.deleteDoc(req, res, poemDbAccess);
}

function edit(req, res){
	const editSchemaValidator = {
		type :"object",
		properties : {
			title: {type : "string", required: false},
			content: {type : "string", required: false},
			from: {type : "string", required: false},
			denounced: {type : "string", required: false},
			isPublic: {type : "string", required: false},
			histo: {type : "string", required: false},
			rubric: {type : "string", required: false},
			tof: {type : "string", required: false}
		},
		additionalProperties : false,
		minProperties: 1
	};
	var isValidParam =  metiers.isValidModel(req.body, editSchemaValidator);
	if(isValidParam.valid){
		return dbServices.update(req, res, poemDbAccess, req.body);
	}
	return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage, 500);

}

function fillPoemModel(source){
	let destination = _.clone(source);
	const paramsValidation = metiers.isValidModel(destination, poemSchemaValidator);
	if (!paramsValidation.valid) {
		return undefined;
	}

	destination.denounced = false,
	destination.created_at = Date.now(),
	destination.isPublic = source.isPublic ? source.isPublic : false,
	destination.update_at =  Date.now();
	destination.histo = false;
	return destination;
}

exports = _.extend(exports, {
	poemDbAccess,
	create,
	getAll,
	get,
	getLastPoemes,
	getByLabel,
	deletePoem,
	edit,
	fillPoemModel
});
