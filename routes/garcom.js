const express = require('express');
const router = express.Router()

router.get("/", (req, res)=>{
    res.render('login')
})

router.post("/", (req,res,next)=>{
    res.send(req.body)
})

router.get("/cadastro", (req,res, next)=>{
    res.render("cadastro")
})

router.post("/tabela", (req,res, next)=>{
    res.render("tabela")
})

router.get("/calculadora", (req, res, next)=>{
    res.render("calculadora")
})

module.exports = router