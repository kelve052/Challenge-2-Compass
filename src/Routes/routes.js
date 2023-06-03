"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var tutors_1 = require("../controllers/tutors");
//get and post
router.route('/tutors').get(tutors_1.default.TutorsGet).post(tutors_1.default.TutorsPost);
//delete and put
router.route('/tutor/:id').delete(function (req, res) {
    var id = req.params.id;
    res.send("rota delete sucefull id = ".concat(id));
}).put(tutors_1.default.PutTutor);
router.route('/pet/:tutorId').post(tutors_1.default.PetPost);
router.route('/pet/:petId/tutor/:tutorId').put(tutors_1.default.PutPet);
exports.default = router;
