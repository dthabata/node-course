const { MASTER_DIR } = require("../helpers/constants");

const index = function (request, response) {
    return response.render('home', { layout: MASTER_DIR, title: "Home" })
};

module.exports = { index };
