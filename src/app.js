require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { init: initHandlebars } = require('./helpers/handlebars');

const app = express();

initHandlebars(app);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));

app.use(function (request, response, next) {
    response.locals.name = 'Thabata';
    response.locals.age = 30;
    // if (request.session.user) {
    //     response.locals.user = request.session.user;
    // }
    next();
});

app.use('/', require('./routes/site'));
app.use('/post', require('./routes/post'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor inicializado")
});
