const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const path = require("path");

const jsonRoutes = require('./routes/json')
const garcomRoutes = require('./routes/garcom')

const home = require('./models/home');

app.use(express.json())

const db = require('./models/db');
const sequelize = require("sequelize");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));

app.get('/garcons', (req, res) => {
    execSQLQuery('SELECT * FROM garcom', res);
})

app.get('/garcons', (req, res) => {
    execSQLQuery('SELECT * FROM garcom', res);
})

// app.get('/', async(res, req)=>{
//       return res.json({
//           erro: false,
//           datahome:{
//               nome: "Digite seu nome: ",
//               email: "xxxx@xxxxx",
//               senha: "xxxxxx",
//               salario: "xxxxx",
//               button: "Entrar"
//           }
//     });
// });

//  app.post('/add-home', async(req, res) => {

//      const dataHome = await home.findOne();

//      if(dataHome){
//          return res.status(400).json({
//              erro: true,
//              mensagem: "Erro: Dados para a página home não cadastrado!"
//          })
//      }

//      await home.create(req.body)
//      .then(() => {
//          return res.json({
//              erro:false,
//              mensagem: "Dados para a pagina home cadastrados com sucesso!"
//          });
//      }).catch(() => {
//          return res.json({
//              erro:true,
//              mensagem: "Conexão com o banco de dados não realizada!"
//          });
//      });
//       return res.status(400).json({
//           erro:false,
//           mensagem: "Dados para a pagina home cadastrados com sucesso!"
//       });
//  });

app.listen(port, ()=> {
    console.log(`Running in http://localhost:${port}`);
})

app.use("/json", jsonRoutes)
app.use("/",garcomRoutes)

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'XXX',
      port     : XXX,
      user     : 'XXX',
      password : 'XXX',
      database : 'XXX'
    });
   
    connection.query(sqlQry, (error, results, fields) => {
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }