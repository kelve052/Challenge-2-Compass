"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dados = require("./dados-veterinaria");
var app = express();
var port = 3000;
app.use(express.json());
const g = app.get('/tutors', function (req, res) {
    res.json(dados);
});
app.listen(port, function () { return console.log("Server online port ".concat(port)); });