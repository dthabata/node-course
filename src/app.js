require('dotenv').config();
const express = require('express');
const app = express();
var exphbs = require('express-handlebars');

app.engine('html', exphbs({
    partialsDir: '/partials',
    layoutsDir: '/layouts',
}));

app.set('view engine', 'html');
app.set('views', '/views');

app.use('/', require('./routes/site'));
app.use('/post', require('./routes/post'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor inicializado")
});
