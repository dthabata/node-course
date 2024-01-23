require('dotenv').config();
const express = require('express');
const Home = require('./controllers/Home');
const Login = require('./controllers/Login');

const app = express();

// app.use('/signup', function (request, response, next) {
//     return response.json("middleware");
//     request.name = "Thabata";
//     request.age = 30;
//     next();
//     return response.json('signup');
// });

app.get("/", Home.index);
app.post("/login", function (request, response, next) {
    return response.json("middleware login")
}, Login.store);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor inicializado")
});
