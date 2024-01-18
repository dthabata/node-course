require('dotenv').config();
const express = require('express');

const Home = require('./controllers/Home');

const app = express();

console.log(Home.index());

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor inicializado")
});
