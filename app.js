//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

  var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //tell express where your static files are

app.get("/", function(req, res){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
   month: "long"
 };

 var day=today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items} ); //looks inside views folder so it is a must, also must have ejs extension, passes through a variable

});

//post request, new data sent to home route
app.post("/", function(req, res){
var item = req.body.newItem;
  items.push(item);

  res.redirect("/"); //home route

});



app.listen(3000, function(){
  console.log("server started on port 3000");
});
