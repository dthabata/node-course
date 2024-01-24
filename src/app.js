require('dotenv').config();
const express = require('express');
const app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', require('./routes/site'));
app.use('/post', require('./routes/post'));


app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor inicializado")
});
