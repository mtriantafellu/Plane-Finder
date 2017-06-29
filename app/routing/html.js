var path = require("path");

module.exports = function(app) {


    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.use(function (req, res) {
        console.log(req.body);
        console.log("It Works!");

        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};