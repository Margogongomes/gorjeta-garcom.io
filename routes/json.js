const express = require('express');
const router = express.Router()

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-  //
//                Index
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-  //

// Mostrar o json na tela
router.get("/", (req, res)=>{
    res.send("rota de tudo")
})

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-  //
//                Conta
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-  //

// Mostrar todas as contas cadastradas
router.get("/contas", (req,res)=>{
    console.log(res.body)
    res.send("rota das contas")
})

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-  //
//               Garçons
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-  //

// Mostrar todos os garçons cadastrados
router.get("/garcons", (req,res)=>{
    res.send("rota do garcom")
})

module.exports = router