// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/api/friends", function(req,res){
    res.json(friends)
  })
 

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    console.log(req.body)
    var surveyScores = req.body.scores;
    
    var bestDiff = 0;
    var bestMatchIndex = 0;

    for (var i = 0; i < friends.length; i++) {
      var Diff = 0;
      for (var j = 0; j < surveyScores.length; j++) {
        Diff += Math.abs(friends[i].scores[j] - surveyScores[j])
        if (bestDiff < Diff || bestDiff === 0) {
          bestDiff = Diff
          bestMatchIndex = i}
      }
    }


    var bestMatch = {
      name: friends[bestMatchIndex].name,
      photo: friends[bestMatchIndex].photo,
      score: friends[bestMatchIndex].scores
    }
    console.log("Your best match is: ", bestMatch)
    friends.push(req.body)
    console.log(req.body)
    res.json(bestMatch)

  

    // console.log("REQ:", req.body)

    // //
    // res.json({name:"isabel", photo:"kkkk"})
  });

};