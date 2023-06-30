import { Request, Response } from "express";
import UserServicesTutor from "../Services/tutorServices";
import userServicesPets from "../Services/petServices";

const TutorsGet = async (req: Request, res: Response) => {
  const select = await new UserServicesTutor().select();
  res.status(200).json({ Msg: "Select Tutors", Tutors: select });
};

const TutorsPost = async (req: Request, res: Response) => {
  try {
    const result = await new UserServicesTutor().create(req.body);
    return res.status(200).json({ Msg: "Sucefull", new_tutor: result });
  } catch (error) {
    return res.status(400).json({ Msg: "Failed" });
  }
};

const PutTutor = async (req: Request, res: Response) => {
  try {
    const idTutor = req.params.id;
    const update = await new UserServicesTutor().update(idTutor, req.body);
    res.status(200).json({ Msg: "Update Sucefull", tutor: update });
  } catch (error) {
    res.status(400).json({ Msg: "update failed" });
  }
};

const DeleteTutor = async (req: Request, res: Response) => {
  try {
    const idTutor = req.params.id;
    await new UserServicesTutor().delete(idTutor);
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ Msg: "Error deleting" });
  }
};



//pet->
const PetPost = async (req: Request, res: Response) => {
  try {
    const idTutor = req.params.tutorId
    const create = await new userServicesPets().postPet(idTutor, req.body)
    res.status(200).json({Msg: "Create pet sucefull", Pet: create})
  } catch (error) {
    res.status(400).json({Msg: "Failed to CREATE pet"})
  }
};

const PutPet = async (req: Request, res: Response) => {
  try {
    const idTutor = req.params.tutorId
    const idPet = req.params.petId
    await new userServicesPets().putPet(idTutor, idPet, req.body)
    res.status(200).json({Msg: "Update pet sucefull"})
  } catch (error) {
    res.status(400).json({Msg: "Failed to UPDATE pet"})
  }
};

const DeletePet = async (req: Request, res: Response) => {
  try {
    const idTutor = req.params.tutorId
    const idPet = req.params.petId
    await new userServicesPets().deletePet(idTutor, idPet)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({Msg: "Error deleting pet"})
  }
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
