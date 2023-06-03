"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var tutors_1 = require("../controllers/tutors");
//get and post
router.route('/tutors').get(tutors_1.default.TutorsGet).post(tutors_1.default.TutorsPost);
//delete and put
router.route('/tutor/:id').delete(tutors_1.default.DeleteTutor).put(tutors_1.default.PutTutor);
router.route('/pet/:tutorId').post(tutors_1.default.PetPost);
router.route('/pet/:petId/tutor/:tutorId').put(tutors_1.default.PutPet).delete(tutors_1.default.DeletePet);
exports.default = router;
