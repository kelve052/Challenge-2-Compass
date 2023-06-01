"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./Routes/routes");
var app = express();
var port = 3000;
app.use(express.json());
app.use('/', routes_1.default);
app.listen(port, function () { return console.log("Server online port ".concat(port)); });
