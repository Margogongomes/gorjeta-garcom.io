const garcom = require("../models/home");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const chaveSecreta = "SCKAODSDOKAOD";

async function cadastroGarcom(req, res){
    const { name, email, salario } = req.body;
    
    let { password } = req.body;

    password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const garcomInfo = await garcom.findOrCreate({nome: name, email: email, senha: password, salario: salario });

    if(garcomInfo){
        return 
    }

    res.render("/calculadora", {name, email, salario});
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

    return res.redirect("/calculadora");

}

module.exports = {cadastroGarcom, loginGarcom};