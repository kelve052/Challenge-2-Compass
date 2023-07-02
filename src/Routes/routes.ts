import * as express from "express";
const router = express.Router()
import controllers from "../Controllers/controllers";
import auth from "../Controllers/auth";
import authentication from "../middleware/authMiddleware";

//rotas tutor
router.route('/tutors').get(authentication, controllers.TutorsGet)
.post(controllers.TutorsPost)
router.route('/tutor/:id').delete(authentication, controllers.DeleteTutor)
.put(authentication, controllers.PutTutor)

//rotas pet
router.route('/pet/:tutorId').post(authentication, controllers.PetPost)
router.route('/pet/:petId/tutor/:tutorId').put(authentication, controllers.PutPet)
.delete(authentication, controllers.DeletePet)

//route auth
router.route('/auth').post(auth.auth)

export default router