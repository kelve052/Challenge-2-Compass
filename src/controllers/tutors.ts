import { Request, Response } from 'express';

//get->
const TutorsGet = ((req: Request, res: Response)=>{
    res.send("get all tutors")
})

//post->
const TutorsPost = ((req: Request, res: Response)=>{
    res.send("post tutors")
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