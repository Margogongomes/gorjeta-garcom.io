const express = require('express');
const router = express.Router()

const garcomController = require("../controllers/garcomController");
const garcom = require('../models/home');

router.post("/login", garcomController.loginGarcom);
router.post("/cadastro", garcomController.cadastroGarcom);

router.get("/", (req, res)=>{
    res.render('login')
})

router.get("/login", (req, res)=>{
    res.render("login");
});

router.get("/cadastro", (req,res, next)=>{
    res.render("cadastro")
})

router.post("/cadastro", function(req,res){
    res.send("cadastro")
})

router.get("/calculadora", (req,res, next)=>{
    res.render("calculadora")
})

router.post("/calculadora", function(req, res){
    res.render("calculadora")
})

module.exports = router