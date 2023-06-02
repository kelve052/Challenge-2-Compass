import * as express from "express";
const router = express.Router()
import tutors from "../controllers/tutors";
//get and post
router.route('/tutors').get(tutors.TutorsGet).post(tutors.TutorsPost)







//delete and put
router.route('/tutor:id').delete((req, res)=>{
    const id = req.params.id
    res.send(`rota delete sucefull id = ${id}`)
}).put((req, res)=>{
    const id = req.params.id
    res.send(`rota put sucefull id = ${id}`)
})

export default router