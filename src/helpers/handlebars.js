var exphbs = require('express-handlebars');

exports.init = function (app) {
    app.engine('html', exphbs({
        partialsDir: '/partials',
        layoutsDir: '/layouts',
    }));
    
    app.set('view engine', 'html');
    app.set('views', '/views');
};
