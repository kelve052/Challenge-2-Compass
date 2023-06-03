import { dados } from "../dados-veterinaria"


//get->
const TutorsGet = ((req, res)=>{
    res.status(200).json(dados)
})

//post->
const TutorsPost = ((req, res)=>{
    const {id, name, phone, email, date_of_birth, zip_code, pets} = req.body
    const paramsTutor = {id, name, phone, email, date_of_birth, zip_code, pets}
    //validação
    const parametrosexist:object = paramsTutor.id && paramsTutor.name && paramsTutor.phone && paramsTutor.email && paramsTutor.date_of_birth && paramsTutor.zip_code
    if(parametrosexist){
        let validacaoId:boolean = false //caso false id não ixiste ainda
        dados.map((a)=>{
            if(paramsTutor.id == a.id){
                validacaoId = true
            }
        })
        if(validacaoId == false){
            dados.push(paramsTutor)
            res.status(200).json(paramsTutor)
        }else{
            res.status(200).send("Operação Recusada!\nO id informado ja pertence a um tutor!")
        }
    }else{
        res.send("Parametros faltando!!!")
    }
})

//post pet->
const PetPost = ((req, res)=>{
    const tutorId:number = req.params.tutorId
    const existed = dados.findIndex(a => a.id == tutorId)
    if(existed > -1){
        const {id, name, species, carry, weight, date_of_birth} = req.body
        const pet = {id, name, species, carry, weight, date_of_birth}
        //validação
        const parametrospet:undefined = pet.id && pet.name && pet.species && pet.carry && pet.weight && pet.date_of_birth
        if(parametrospet){
            let validacaoId:boolean = false //caso false id_pet não ixiste ainda
            if(dados[existed].pets !== undefined){
                dados[existed].pets.map((a)=>{
                    if(pet.id == a.id){
                        validacaoId = true
                    }
                })
                if(validacaoId == false){
                    dados[existed].pets.push(pet)
                    res.status(200).json(dados[existed])
                }else{
                    res.status(200).send("Operação Recusada!\nO id informado ja pertence a um pet!")
                }
            }else{
                dados[existed].pets = [pet]
                res.status(200).json(dados[existed])
            }
        }else{
            res.send("Parametros do pet faltando faltando!!!")
        }
    }else{
        res.status(200).send("O id informado não pertence a nenhum tutor!")
    }
})

const PutTutor = ((req, res)=>{
    const {id, name, phone, email, date_of_birth, zip_code, pets} = req.body
    const newdados = {id, name, phone, email, date_of_birth, zip_code, pets}
    const idTutor:number = req.params.id
    const existed = dados.findIndex(a => a.id == idTutor)
    if(existed > -1){
        if(pets){
            res.send('não é permitido atualizar os pets do tutor!\nSomente na execução de update ao pet!\nRenova a propiedade pets')
        }else{
            if(id && name){
                if(idTutor == id){
                    newdados.pets = dados[existed].pets
                    dados[existed] = newdados
                    res.json(dados[existed])
                }else{
                    res.send("O id não pode ser alterado!")
                }
            }else{
                res.send(`Propiedades chave faltando!!\n propiedades chaves: ID e NAME`)
            }
        }
    }else{
        res.send(`O id informado não existe!`)
    }
})
export default {TutorsGet, TutorsPost, PutTutor, PetPost}