//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
//module for date
const date = require(__dirname + "/date.js");

const app = express();

  const items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //tell express where your static files are

app.get("/", function(req, res){

const day = date.getDate();
    res.render("list", {kindOfDay: day, newListItems: items} ); //looks inside views folder so it is a must, also must have ejs extension, passes through a variable

});

//post request, new data sent to home route
app.post("/", function(req, res){
const item = req.body.newItem;
  items.push(item);

  res.redirect("/"); //home route

});



app.listen(3000, function(){
  console.log("server started on port 3000");
});
