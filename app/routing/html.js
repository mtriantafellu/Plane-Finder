module.exports = function (app) {

    var path = require("path");

    app.get("/", function (req, res) {

        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    app.get("api", function (req, res) {

        var user = {
            firstName: "Bill",
            lastName: "Bob",
            age: 5
        }

        res.json(user);
    });

    app.post("/api/send", function (req, res) {
        console.log(req.body);

        res.json("It Works!");
    });

}