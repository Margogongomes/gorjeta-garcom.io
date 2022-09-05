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

app.listen(port, ()=> {
    console.log(`Running in http://localhost:${port}`);
})

app.use("/json", jsonRoutes)
app.use("/",garcomRoutes)
