import UserRepository from "../Repositories/repository";

const repositoryTutors = UserRepository.UserRepositoryTutors

class UserServicesTutor {
  async select() {
    return await new repositoryTutors().getTutor()
  }

  async create(body: any) {
    const { email } = body;
    const emailexiste = await new repositoryTutors().emailExists(email);
    if (emailexiste) {
      throw new Error("email already belongs to a tutor");
    } else {
      return await new repositoryTutors().createTutor(body);
    }
  }

  async update(id: string, body: any) {
    try {
      await new repositoryTutors().updateTutor(id, body);
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string) {
    try {
      const deleteTutor = await new repositoryTutors().deleteTutor(id);
      return deleteTutor;
    } catch (error) {
      throw error;
    }
  }
}
export default UserServicesTutor;
