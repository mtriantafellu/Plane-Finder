module.exports = function (app) {

    var path = require ("path");

    app.get("/location", function (req, res) {
        var user = {
            userName: "API",
            address: "3303"
        }

        res.json(user);
    });

    app.get("/data", function (req, res) {

        var user = {
            userName: "API",
            address: "Number 2"
        }

        res.json(user);
    });

}