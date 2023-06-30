import { petSchema } from "../Model/modelPet";
import tutorSchema from "../Model/modelTutor";

class UserRepositoryTutors{
  async getTutor() {
    const select = await tutorSchema.find();
    return select;
  }

  async emailExists(email: string) {
    const table = await tutorSchema.findOne({});
    if (table?.email == email) {
      return true;
    } else {
      return false;
    }
  }

  async createTutor(body: any) {
    const newtutor = await tutorSchema.create(body);
    return newtutor;
  }
  async updateTutor(id: string, body: any) {
    const idtutor = await tutorSchema.findOne({ _id: id });
    if (idtutor) {
      const update = await tutorSchema.findByIdAndUpdate(id, body);
      return update;
    } else {
      throw new Error("id does not belong to any tutor");
    }
  }
  async deleteTutor(id: string) {
    const idtutor = await tutorSchema.findOne({ _id: id });
    if (idtutor) {
      const deleteTutor = await tutorSchema.findByIdAndDelete(idtutor);
      return deleteTutor;
    } else {
      throw new Error("id does not belong to any tutor");
    }
  }
}

class UserRepositoryPets{
  async existsTutor(idTutor: string){
    const tutor = await tutorSchema.findById(idTutor)
    if(!tutor){
      throw Error
    }
    return tutor?.id
  }
  async existsPet(idTutor: string, idPet: string){
    await tutorSchema.findById(idTutor).then(
      tutor => {
        const petExists = tutor?.pets.some(pet => pet.id === idPet)
        if(!petExists){
          throw Error
        }
      }
    )
  }
  async postPet(idTutor: any, body: any){
    try {
      await tutorSchema.findById(idTutor).then(
        tutor =>{
          tutor?.pets.push(body)
          tutor?.save()
        }
      )
    } catch (error) {
      throw new Error("error creating a pet")
    }
  }
  async putPet(idTutor: string, idPet: string, body: any){
    try {
      await tutorSchema.findById(idTutor).then(
        tutor => {
          const pet = tutor?.pets.id(idPet)
          pet?.set(body)
          tutor?.save()
        }
      )
    } catch (error) {
      throw error
    }
  }

  async deletePet(idTutor: string, idPet: string){
    try {
      await tutorSchema.findById(idTutor).then(
        tutor => {
          tutor?.pets.pull(idPet)
          tutor?.save()
      }
      )
    } catch (error) {
      throw error
    }
  }
}

export default {UserRepositoryTutors, UserRepositoryPets};
