import tutorSchema from "../Model/model";

class UserRepository {
    async emailExiste(email: string){
        const table = await tutorSchema.findOne({})
        if(table?.email == email){
            return true
        }else{
            return false
        }
    }

    async createTutor(body: any){
        const newtutor = await tutorSchema.create(body)
        return newtutor
    }
}
export default UserRepository