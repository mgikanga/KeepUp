// require modules 
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var axios = require("axios");

// require all models
var db = require("./models")

//initialize port
var PORT = 3000;

//initialize express
var app = express();

// use morgan logger for logging requests
app.use(logger(dev));
//body-parser for handling form submissions
app.use(bodyParser.urlencoded({estended:true}));
//express.static to serve the public folder as a static directory
app.use(express.static("public"));

//connect to Mongo Db
mongoose.connect("mongodb:localhost/articleLog");

//Routes

// A GET route to scrape the hacker news website
app.get("/scrape", function(req,res){
    axios.get("https://news.ycombinator.com/").then(function(response){
        var $ = cheerio.load(response.data);
        $("article td").each(function(i, element){
            var result = {};
            result.title = $ (this)
            .children("a")
            .attr("href");
           console.log(results);
        })
    })
})
app.listen(PORT, function(){
    console.log("App running on port " + PORT )
}

)