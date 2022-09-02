const Sequelize = require('sequelize');

const sequelize = new Sequelize('restaurantes', 'root', 'admin', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch((err) => {
    console.log("Erro: Conexão com o banco de dados não realizada!")
    console.log(`Erro: ${err}`)
})

module.exports = sequelize;