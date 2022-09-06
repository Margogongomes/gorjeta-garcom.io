const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const path = require("path");

const garcomRoutes = require('./routes/garcom')

const home = require('./models/home');

app.use(express.json())

const db = require('./models/db');
const cookie = require('cookie-parser');
const sequelize = require("sequelize");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.engine('.ejs', require('ejs').__express);

app.use(express.static('public'))

app.use(cookie());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, ()=> {
    console.log(`Running in http://localhost:${port}`);
})

app.use(garcomRoutes)