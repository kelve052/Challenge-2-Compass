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
    var temp = { id: id, name: name, phone: phone, email: email, date_of_birth: date_of_birth, zip_code: zip_code, pets: pets };
    //validação
    var parametrosTemp = temp.id && temp.name && temp.phone && temp.email && temp.date_of_birth && temp.zip_code;
    if (parametrosTemp) {
        var validacaoId_1 = false; //caso false id não ixiste ainda
        dados_veterinaria_1.dados.map(function (a) {
            if (temp.id == a.id) {
                validacaoId_1 = true;
            }
        });
        if (validacaoId_1 == false) {
            dados_veterinaria_1.dados.push(temp);
            res.status(200).json(temp);
        }
        else {
            res.send("Operação Recusada!\nO id informado ja pertence a um tutor!");
        }
    }
    else {
        res.send("Parametros faltando!!!");
    }
});
exports.default = { TutorsGet: TutorsGet, TutorsPost: TutorsPost };
