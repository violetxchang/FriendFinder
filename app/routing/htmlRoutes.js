// // ===============================================================================
// // DEPENDENCIES
// // We need to include the path package to get the correct file path for our html
// // ===============================================================================
// var path = require("path");


// // ===============================================================================
// // ROUTING
// // ===============================================================================

// module.exports = function(app) {
//   // HTML GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases the user is shown an HTML page of content
//   // ---------------------------------------------------------------------------

//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/../public/survey.html"));
//   });

//   // If no matching route is found default to home
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
//   });
// };


var path = require("path");
module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  app.get("/css", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/css/style.css"));
  });
  app.get("/javascript", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/javascript/script.js"));
  });
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};