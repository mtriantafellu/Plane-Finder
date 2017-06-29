var planesData = require("../data/planes.js");

module.exports = function (app) {

    app.get("/api", function(req, res) {

        res.json(planesArray);

    });

};