"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dados_veterinaria_1 = require("../dados-veterinaria");
//get->
var TutorsGet = (function (req, res) {
    res.status(200).json(dados_veterinaria_1.dados);
});
//post->
var TutorsPost = (function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name, phone = _a.phone, email = _a.email, date_of_birth = _a.date_of_birth, zip_code = _a.zip_code, pets = _a.pets;
    var paramsTutor = { id: id, name: name, phone: phone, email: email, date_of_birth: date_of_birth, zip_code: zip_code, pets: pets };
    //validação
    var parametrosexist = paramsTutor.id && paramsTutor.name && paramsTutor.phone && paramsTutor.email && paramsTutor.date_of_birth && paramsTutor.zip_code;
    if (parametrosexist) {
        var validacaoId_1 = false; //caso false id não ixiste ainda
        dados_veterinaria_1.dados.map(function (a) {
            if (paramsTutor.id == a.id) {
                validacaoId_1 = true;
            }
        });
        if (validacaoId_1 == false) {
            dados_veterinaria_1.dados.push(paramsTutor);
            res.status(200).json(paramsTutor);
        }
        else {
            res.status(200).send("Operação Recusada!\nO id informado ja pertence a um tutor!");
        }
    }
    else {
        res.send("Parametros faltando!!!");
    }
});
//post pet->
var PetPost = (function (req, res) {
    var tutorId = req.params.tutorId;
    var existed = dados_veterinaria_1.dados.findIndex(function (a) { return a.id == tutorId; });
    if (existed > -1) {
        var _a = req.body, id = _a.id, name_1 = _a.name, species = _a.species, carry = _a.carry, weight = _a.weight, date_of_birth = _a.date_of_birth;
        var pet_1 = { id: id, name: name_1, species: species, carry: carry, weight: weight, date_of_birth: date_of_birth };
        //validação
        var parametrospet = pet_1.id && pet_1.name && pet_1.species && pet_1.carry && pet_1.weight && pet_1.date_of_birth;
        if (parametrospet) {
            var validacaoId_2 = false; //caso false id_pet não ixiste ainda
            if (dados_veterinaria_1.dados[existed].pets !== undefined) {
                dados_veterinaria_1.dados[existed].pets.map(function (a) {
                    if (pet_1.id == a.id) {
                        validacaoId_2 = true;
                    }
                });
                if (validacaoId_2 == false) {
                    dados_veterinaria_1.dados[existed].pets.push(pet_1);
                    res.status(200).json(dados_veterinaria_1.dados[existed]);
                }
                else {
                    res.status(200).send("Operação Recusada!\nO id informado ja pertence a um pet!");
                }
            }
            else {
                dados_veterinaria_1.dados[existed].pets = [pet_1];
                res.status(200).json(dados_veterinaria_1.dados[existed]);
            }
        }
        else {
            res.send("Parametros do pet faltando faltando!!!");
        }
    }
    else {
        res.status(200).send("O id informado não pertence a nenhum tutor!");
    }
});
exports.default = { TutorsGet: TutorsGet, TutorsPost: TutorsPost, PetPost: PetPost };
