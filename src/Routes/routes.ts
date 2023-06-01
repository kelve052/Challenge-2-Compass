import * as express from "express";
const router = express.Router()

//get and post
router.route('/tutors').get((req, res)=>{
    res.send('rota get susefull!')
}).post((req, res)=>{
    res.send('rota post sulcefull!')
})

//delete and put
router.route('/tutor:id').delete((req, res)=>{
    const id = req.params.id
    res.send(`rota delete sucefull id = ${id}`)
}).put((req, res)=>{
    const id = req.params.id
    res.send(`rota put sucefull id = ${id}`)
})

export default router