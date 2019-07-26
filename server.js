var express = require("express");
var bodyParser = require("body-parser");
var path=require("path");

//tells node we're creating an "express server"
var app = express();

//sets initial port
var PORT = process.env.PORT || 8080;

//sets up the express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//ROUTER
//points our server to a series of "route files"
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



//LISTENER
//the below code "starts" our server
app.listen(PORT, function(){
    console.log("Listening on PORT: ", PORT)
});