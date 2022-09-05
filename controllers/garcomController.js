const db = require('../models/db');

module.exports = {
    insert(req, res){
        let datas = {
            "nome": req.body,
            "email": req.body,
            "senha": req.body
        }
    }
}