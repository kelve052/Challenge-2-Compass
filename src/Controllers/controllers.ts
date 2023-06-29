import { Request, Response } from "express";
import UserServicesTutor from "../Services/tutorServices";
import userServicesPets from "../Services/petServices";

//get->
const TutorsGet = async (req: Request, res: Response) => {
  const select = await new UserServicesTutor().select();
  res.status(200).json({ Msg: "Select Tutors", Tutors: select });
};

//post->
const TutorsPost = async (req: Request, res: Response) => {
  try {
    const createTutorService = new UserServicesTutor();
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
    const update = await new UserServicesTutor().update(idTutor, req.body);
    res.status(200).json({ Msg: "Update Sucefull", tutor: update });
  } catch (error) {
    res.status(400).json({ Msg: "update failed" });
  }
};

// delete ->
const DeleteTutor = async (req: Request, res: Response) => {
  try {
    const idTutor = req.params.id;
    await new UserServicesTutor().delete(idTutor);
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ Msg: "Error deleting" });
  }
};



//post pet->
const PetPost = async (req: Request, res: Response) => {
  const idTutor = req.params.tutorId
  await new userServicesPets().postPet(idTutor)
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
