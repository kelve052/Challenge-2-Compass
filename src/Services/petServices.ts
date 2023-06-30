import UserRepository from "../Repositories/repository";

const repositoryPets = UserRepository.UserRepositoryPets

class userServicesPets{
  async postPet(idTutor: string, body: any){
    try {
      const tutor = await new repositoryPets().existsTutor(idTutor)
      const createPet = await new repositoryPets().postPet(tutor, body)
      return createPet
    } catch (error) {
      throw error
    }
  }

  async putPet(idTutor: string, idPet: string, body: any){
    try {
      await new repositoryPets().existsTutor(idTutor)
      await new repositoryPets().existsPet(idTutor, idPet)
      await new repositoryPets().putPet(idTutor, idPet, body)
    } catch (error) {
      throw error
    }
  }

  async deletePet(idTutor: string, idPet: string,){
    try {
      await new repositoryPets().existsTutor(idTutor)
      await new repositoryPets().existsPet(idTutor, idPet)
      await new repositoryPets().deletePet(idTutor, idPet)
    } catch (error) {
      throw error
    }
  }
}

export default userServicesPets