"use strict";
var Koa = require("koa");
var bodyParser = require("koa-bodyparser");
var chalk = require("chalk");
var routes_1 = require("./routes");
var app = new Koa();
var port = process.env.PORT || 8080;
app
    .use(bodyParser())
    .use(routes_1["default"].routes())
    .use(routes_1["default"].allowedMethods());
app.listen(port, function () {
    return console.log(chalk.black.bgGreen.bold("Listening on port " + port));
});
exports.__esModule = true;
exports["default"] = app;
