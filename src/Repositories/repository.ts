import tutorSchema from "../Model/model";

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
  async postPet(idtutor: string){
    console.log("certo", idtutor)
  }
}

export default {UserRepositoryTutors, UserRepositoryPets};
