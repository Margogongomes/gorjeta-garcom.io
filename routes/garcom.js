const express = require('express');
const router = express.Router()

const garcomController = require("../controllers/garcomController");

router.post("/api/login", garcomController.loginGarcom);
router.post("/api/cadastro", garcomController.cadastroGarcom);

router.get("/", (req, res)=>{
    res.render('login')
})

router.get("/login", (req, res)=>{
    res.render("login");
});

router.get("/cadastro", (req,res, next)=>{
    res.render("cadastro")
})

router.get("/calculadora", (req, res, next)=>{
    res.render("calculadora")
})

module.exports = router