import * as express from "express";
const router = express.Router()
import tutors from "../controllers/tutors";
//get and post
router.route('/tutors').get(tutors.TutorsGet).post(tutors.TutorsPost)

router.route('/pet/:tutorId').post(tutors.PetPost)






//delete and put
router.route('/tutor/:id').delete((req, res)=>{
    const id = req.params.id
    res.send(`rota delete sucefull id = ${id}`)
}).put(tutors.PutTutor)

export default router