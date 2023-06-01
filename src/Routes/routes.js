"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
//get and post
router.route('/tutors').get(function (req, res) {
    res.send('rota get susefull!');
}).post(function (req, res) {
    res.send('rota post sulcefull!');
});
//delete and put
router.route('/tutor:id').delete(function (req, res) {
    var id = req.params.id;
    res.send("rota delete sucefull id = ".concat(id));
}).put(function (req, res) {
    var id = req.params.id;
    res.send("rota put sucefull id = ".concat(id));
});
exports.default = router;
