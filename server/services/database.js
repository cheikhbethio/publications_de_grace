"use strict";

const _ = require("underscore");
const myVar = require("../config/variables.js");
const responseMsg = myVar.httpMessage.response;
const ObjectID = require("mongodb").ObjectID;
const metiers = require("./metiers");

function post(req, res, objectToSave){
	notDbAccessFound(objectToSave);
	return objectToSave.save()
		.then((doc) => {
			let messageToSending = {
				code : 201,
				message : responseMsg.success.successMessage,
				_id : doc._id
			};
			res.status(201).json(messageToSending);
		})
		.catch(() => {
			return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage,500);
		});
}


function get(req, res, dbAccess){
	notDbAccessFound(dbAccess);
	if(!ObjectID.isValid(req.params.id)){
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage,500);
	}
	dbAccess.findById(req.params.id)
	.then((value) => {
		let messageToSending = {
			code : "200",
			message : responseMsg.success.successMessage,
			user : value
		};
		return res.status(200).json(messageToSending);
	})
	.catch(() => {
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage,500);
	});
}

function getAll(req, res, dbAccess){
	dbAccess.find()
	.then((doc) => {
		const messageToSend = {
			code : "200",
			message : responseMsg.success.successMessage,
			result : doc
		};
		return res.status(200).json(messageToSend);
	})
	.catch(() => {
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage, 500);
	});
}

function deleteDoc(req, res,dbAccess){
	notDbAccessFound(dbAccess);
	if(!ObjectID.isValid(req.params.id)){
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage);
	}
	return dbAccess.findByIdAndRemove(req.params.id)
	.then((value) => {
		res.status(201).json({
			code : 201,
			message : responseMsg.success.successMessage,
			_id : value ? value._id : null
		});
	})
	.catch(() => {
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage,500);
	});
}

function update(req, res,dbAccess, body){
	notDbAccessFound(dbAccess);
	if(!ObjectID.isValid(req.params.id)){
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage,500);
	}
	dbAccess.findByIdAndUpdate(req.params.id, body)
	.then((value) => {
		res.status(201).json({
			code : 201,
			message : responseMsg.success.successMessage,
			_id : value ? value._id : null
		});
	})
	.catch(() => {
		return metiers.quitWithFailure(req, res, responseMsg.failure.failureMessage,500);
	});
}

function notDbAccessFound(dbAccess){
	if (_.isUndefined(dbAccess)){
		throw "Pas de point d'entrée à la base";
	}
}


exports = _.extend(exports ,{
	deleteDoc,
	update,
	get,
	post,
	getAll
});
