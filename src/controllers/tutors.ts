import { Request, Response } from 'express';
import UserRepository from '../Repositories/repository';

//get->
const TutorsGet = ((req: Request, res: Response)=>{
    res.send("get all tutors")
})

//post->
const TutorsPost = ((req: Request, res: Response)=>{
    UserRepository.UserRepository.prototype.createfin(req.body)
    res.send('deu certo')
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