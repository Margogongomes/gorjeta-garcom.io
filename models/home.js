const Sequelize = require('sequelize');
const db = require("./db");

const home = db.define('homes', {
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
    button:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//criar a tabela no banco de dados
// home.sync();


//verifica se há alguma diferença na tabela e faz a alteração
//home.sync({ alter: true});

module.exports = home;