import * as express from "express";
const router = express.Router()
import tutors from "../controllers/tutors";
//get and post
router.route('/tutors').get(tutors.TutorsGet).post(tutors.TutorsPost)

//delete and put
router.route('/tutor/:id').delete(tutors.DeleteTutor).put(tutors.PutTutor)

router.route('/pet/:tutorId').post(tutors.PetPost)
router.route('/pet/:petId/tutor/:tutorId').put(tutors.PutPet).delete(tutors.DeletePet)

export default router