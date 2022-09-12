const garcom = require("../models/home");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const chaveSecreta = "SCKAODSDOKAOD";

async function cadastroGarcom(req, res){
    const { name, email, salario } = req.body;
    
    let { password } = req.body;

    const garcomInfo = await garcom.findOne({where: {nome: name}});
    
    if(garcomInfo){
        return res.send("JA EXISTE GARÇOM");
    }

    await garcom.create({ nome: name, email: email, senha: password, salario: salario });
    

    res.render("calculadora", {email: email, salario: salario});
}

async function loginGarcom(req, res){
    const { email, password } = req.body;

    const garcomInfo = await garcom.findOne({ where: {
        email: email
    }});

    if(!garcomInfo){
        return res.send("Conta especificada não foi encontrada!");
    }

    const comparacaoSenha = password === garcomInfo.senha;

    if(comparacaoSenha){
        await res.cookie("jwt-token", jwt.sign({
            email: garcomInfo.email,
            salario: garcomInfo.salario
        }, chaveSecreta));
        return res.render("calculadora", { salario: garcomInfo.salario });
    }

    return res.send("Senha incorreta!");

}

async function pegarSalario(req, res){
    const { email, salario } = req.body;

    const garcomInfo = await garcom.findOne({where: {email: email, salario: salario}});
    

    res.render("calculadora", {email: garcomInfo.email, salario: garcomInfo.salario});
}


module.exports = {cadastroGarcom, loginGarcom, pegarSalario};