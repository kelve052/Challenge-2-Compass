import * as express from "express";
const router = express.Router()
import controllers from "../Controllers/controllers";

//rotas tutor
router.route('/tutors').get(controllers.TutorsGet).post(controllers.TutorsPost)
router.route('/tutor/:id').delete(controllers.DeleteTutor).put(controllers.PutTutor)

//rotas pet
router.route('/pet/:tutorId').post(controllers.PetPost)
router.route('/pet/:petId/tutor/:tutorId').put(controllers.PutPet).delete(controllers.DeletePet)

export default router