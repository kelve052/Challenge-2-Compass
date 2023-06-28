import UserRepository from "../Repositories/repository"

class UserServices {
    async select(){
        return await UserRepository.prototype.get()
    }
    
    async create(body: any){
        const {email} = body
            const emailexiste = await UserRepository.prototype.emailExiste(email)
            if(emailexiste){
                throw new Error("email already belongs to a tutor");
            }else{
                return UserRepository.prototype.createTutor(body)
            }
    }
}
export default UserServices