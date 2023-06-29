import tutorSchema from "../Model/model";

class UserRepository {
    async get(){
        const select = await tutorSchema.find()
        return select
    }

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
    async updateTutor(id: string, body: any){
        const table = await tutorSchema.findOne({_id: id})
        console.log(table)
        if(table?.id == id){
            const update = await tutorSchema.findByIdAndUpdate(id, body)
            return update   
        }else{
            throw new Error("id does not belong to any tutor");
        }
        
    }
}
export default UserRepository