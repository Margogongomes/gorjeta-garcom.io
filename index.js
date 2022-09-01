const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const path = require("path");

const jsonRoutes = require('./routes/json')
const garcomRoutes = require('./routes/garcom')

app.listen(port, ()=> {
    console.log(`Running in http://localhost:${port}`);
})

app.use(express.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (res, req)=>{

    //valores que vão vir do forms
    var email = req.body.email;
    var senha = req.body.senha;

    //array do erro
    const erros = [];
})

app.use("/json", jsonRoutes)
app.use("/",garcomRoutes)