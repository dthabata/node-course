const edit = function (request, response) {
    return response.json(request.params["id"]);
};

module.exports = { edit };
