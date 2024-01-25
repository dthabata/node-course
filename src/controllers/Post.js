const edit = function (request, response) {
    return response.json(request.params["id"]);
};

const store = function (request, response) {
    return response.json(request.body["name"]);
};

module.exports = { edit, store };
