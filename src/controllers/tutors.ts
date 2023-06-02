import { dados } from "../dados-veterinaria"


//get->
const TutorsGet = ((req, res)=>{
    res.status(200).json(dados)
})

//post->
const TutorsPost = ((req, res)=>{
    const {id, name, phone, email, date_of_birth, zip_code, pets} = req.body
    const temp = {id, name, phone, email, date_of_birth, zip_code, pets}
    //validação
    const parametrosTemp = temp.id && temp.name && temp.phone && temp.email && temp.date_of_birth && temp.zip_code
    if(parametrosTemp){
        let validacaoId:boolean = false //caso false id não ixiste ainda
        dados.map((a)=>{
            if(temp.id == a.id){
                validacaoId = true
            }
        })
        if(validacaoId == false){
            dados.push(temp)
            res.status(200).json(temp)
        }else{
            res.send("Operação Recusada!\nO id informado ja pertence a um tutor!")
        }
    }else{
        res.send("Parametros faltando!!!")
    }
})
export default {TutorsGet, TutorsPost}