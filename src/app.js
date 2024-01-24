require('dotenv').config();
const express = require('express');
// const Home = require('./controllers/Home');

const app = express();

app.use('/', require('./routes/site'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor inicializado")
});
