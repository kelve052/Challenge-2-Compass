import tutorSchema from "../Model/model";

class UserRepository {
    createfin(body: string){
        const usuario = tutorSchema.create(body)
        console.log('deu certo')
        console.log(body)
        console.log(`\n\n\n\ ${usuario}`)
        return usuario
    }
}
export default {UserRepository}