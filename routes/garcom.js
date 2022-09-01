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

router.get("/calculadora", (req, res, next)=>{
    res.render("calculadora")
})

module.exports = router