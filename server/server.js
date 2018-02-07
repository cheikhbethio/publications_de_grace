"use strict";
//module js
const application_root = __dirname;
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
//const favicon = require("serve-favicon");
const morgan = require("morgan");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
// const passport = require("passport");
const myVar = require("./config/variables");
const logger = require("log");
// const acl = require("./acl/services");


const print = new logger("info");
const app = express();
var configDB = require("./config/database.js");
const port = process.env.PORT || 8000;
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.setMaxListeners(200);

mongoose.connect(configDB.db.url);
mongoose.Promise = global.Promise;

// on recup les variables

//starting server port
app.use(express.static(path.join(application_root, "../public")));

app.set("trust proxy", 1); // trust first proxy
// require("./config/passport.js")(passport);
app.use(morgan("dev"));
app.use(methodOverride());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
	secret: "seugneBethiodieuredieufway",
	resave: true,
	saveUninitialized: true,
	expires: new Date(Date.now() + myVar.session.session_duration),
	cookie: {maxAge: myVar.session.session_duration}
}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(flash());

app.use(function manageSession(req, res, next) {
	var session_age = req.session.cookie.expires;
	if (session_age < new Date(Date.now())) {
		req.logout();
		req.session.destroy();
	}
	return next();
});

app.use(bodyParser.urlencoded({extended: true}));

/********************************* routes**********************************/

app.listen(port, function () {
	print.info("node server on port : " + port);
	print.info("application_root : " + application_root);
});

// app.all("/api/member|admin|writer/*", acl.isLoggedIn);
// app.all("/api/member/*", acl.isLoggedIn, acl.isMember);
// app.all("/api/admin/*", acl.isLoggedIn, acl.isGod);
// app.all("/api/writer/*", acl.isLoggedIn, acl.isWritter);

require("./users/userRoutes.js")(app);
require("./users/connectionRoutes.js")(app);
require("./poems/routes.js")(app);
require("./comments/routes.js")(app);
module.exports = app;
