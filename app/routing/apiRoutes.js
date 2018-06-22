var path = require("path");

var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    app.post("/api/friends",function(req, res) {
        var userInput = req.body;
        var userResponses = userInput.scores;

        var matchedName = "";
        var matchedFace = "";
        var totaldiff = 25000;

        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            for (var d = 0; d < userResponses.length; d++) {
                difference += Math.abs(friends[i].scores[d] - userResponses[d]);
            }

        if (difference < totaldiff) {

            totaldiff = difference;
            matchedName = friends[i].name;
            matchedFace = friends[i].photo;
        }
    }

    friends.push(userInput);

    res.json({status: "All good", matchedName, matchedName, matchedFace, matchedFace});
    });
};