import UserRepository from "../Repositories/repository"

class UserServices {
    async select(){
        return await new UserRepository().get()
    }
    
    async create(body: any){
        const {email} = body
            const emailexiste = await new UserRepository().emailExiste(email)
            if(emailexiste){
                throw new Error("email already belongs to a tutor");
            }else{
                return UserRepository.prototype.createTutor(body)
            }
    }

    async update(id: string, body: any){
        try {
           await new UserRepository().updateTutor(id, body)
        } catch (error) {
            throw error
        }
    }
}
export default UserServices