import { Request, Response } from 'express';
import UserServices from '../Services/createTutor';

//get->
const TutorsGet = ((req: Request, res: Response)=>{

})

//post->
const TutorsPost = (async (req: Request, res: Response)=>{
    try {
        const createTutorService = new UserServices()
        const result = await createTutorService.create(req.body)
        return res.status(200).json({Msg: "Sucefull", new_tutor: result})
    } catch (error) {
        return res.status(400).json({Msg: "Failed"})
    }
})

//post pet->
const PetPost = ((req: Request, res: Response)=>{
    res.send("post pet")
})

//put ->
const PutTutor = ((req: Request, res: Response)=>{
   res.send("put tutor")
})

//put pet ->
const PutPet = ((req: Request, res: Response)=>{
    res.send("put pet")
})
// delete ->
const DeleteTutor = ((req: Request, res: Response)=>{
    res.send("delete tutor")
})
// delete pet ->
const DeletePet = ((req: Request, res: Response)=>{
    res.send("delete pet")
})

export default {TutorsGet, TutorsPost, PutTutor, PetPost, PutPet, DeleteTutor, DeletePet}