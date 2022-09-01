const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const jsonRoutes = require('./routes/json')
const garcomRoutes = require('./routes/garcom')

app.use(express.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.listen(port, ()=> {
    console.log(`Running in http://localhost:${port}`);
})

app.use("/json", jsonRoutes)

app.use("/",garcomRoutes)