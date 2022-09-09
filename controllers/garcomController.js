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

    const comparacaoSenha = bcrypt.compareSync(password, garcomInfo.senha);

    if(comparacaoSenha){
        await res.cookie("jwt-token", jwt.sign({
            email: garcomInfo.email,
            salario: garcomInfo.salario
        }, chaveSecreta));
        res.render("calculadora", { salario: garcomInfo.salario });
    }

    return res.redirect("/login");

}

module.exports = {cadastroGarcom, loginGarcom};