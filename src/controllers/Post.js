const edit = function (request, response) {
    return response.json(request.params["id"]);
};

const store = function (request, response) {
    return response.json(request.body["name"]);
};

const update = function (request, response) {
    return response.json(request.params);
};

const destroy = function (request, response) {
    return response.json(request.params);
};

module.exports = { edit, store, update, destroy };
