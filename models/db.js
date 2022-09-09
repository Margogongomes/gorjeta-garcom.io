const Sequelize = require('sequelize');

const sequelize = new Sequelize('restaurantes', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch((err) => {
    console.log("Erro: Conexão com o banco de dados não realizada!")
    console.log(`Erro: ${err}`)
})

module.exports = sequelize;