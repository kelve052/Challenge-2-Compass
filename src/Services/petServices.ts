import UserRepository from "../Repositories/repository";

const repositoryPets = UserRepository.UserRepositoryPets

class userServicesPets{
  async postPet(idTutor: string){
    await new repositoryPets().postPet(idTutor)
  }
}

export default userServicesPets