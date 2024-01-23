const index = function (request, response) {
    return response.json({ name: request.name, age: request.age });
};

module.exports = { index };
