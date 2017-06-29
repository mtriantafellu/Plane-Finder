var planeData = require("../data/planes.js");

module.exports = function (app) {

    app.get("/api/planes", function(req, res) {
        res.json(planes);
    });

    app.post("/api/planes", function(req, res) {
        if (planes.length <5) {
            planes.push(req.body);
            res.json(true);
        }
        else {
            console.log("this is the else");
        }
    });

    app.post("/api/clear", function() {
        planes=[];

        console.log(planes);
    });
};