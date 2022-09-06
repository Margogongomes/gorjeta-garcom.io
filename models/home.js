const Sequelize = require('sequelize');
const db = require("./db");

const garcom = db.define('garcom', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    salario:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

//criar a tabela no banco de dados
// home.sync();


//verifica se há alguma diferença na tabela e faz a alteração
garcom.sync({ alter: true});

module.exports = garcom;