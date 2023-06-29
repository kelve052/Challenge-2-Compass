import { Request, Response } from "express";
import UserServices from "../Services/tutorServices";

//get->
const TutorsGet = async (req: Request, res: Response) => {
  const select = await new UserServices().select();
  res.status(200).json({ Msg: "Select Tutors", Tutors: select });
};

//post->
const TutorsPost = async (req: Request, res: Response) => {
  try {
    const createTutorService = new UserServices();
    const result = await createTutorService.create(req.body);
    return res.status(200).json({ Msg: "Sucefull", new_tutor: result });
  } catch (error) {
    return res.status(400).json({ Msg: "Failed" });
  }
};

//put ->
const PutTutor = async (req: Request, res: Response) => {
  try {
    const idTutor = req.params.id;
    const update = await new UserServices().update(idTutor, req.body);
    res.status(200).json({ Msg: "Update Sucefull", tutor: update });
  } catch (error) {
    res.status(400).json({ Msg: "update failed" });
  }
};

// delete ->
const DeleteTutor = async (req: Request, res: Response) => {
  try {
    const idTutor = req.params.id;
    await new UserServices().delete(idTutor);
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ Msg: "Error deleting" });
  }
};



//post pet->
const PetPost = (req: Request, res: Response) => {
  const idTutor = req.params.tutorId
};

//put pet ->
const PutPet = (req: Request, res: Response) => {
  res.send("put pet");
};
// delete pet ->
const DeletePet = (req: Request, res: Response) => {
  res.send("delete pet");
};

export default {
  TutorsGet,
  TutorsPost,
  PutTutor,
  PetPost,
  PutPet,
  DeleteTutor,
  DeletePet,
};
