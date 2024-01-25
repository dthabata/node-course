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

app.use('/', require('./routes/site'));
app.use('/post', require('./routes/post'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor inicializado")
});
