var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");
    
    

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
    res.render("cv");
});



app.listen(process.env.PORT, process.env.IP, function(){
console.log("The YelpCamp Server Has Started!");
});
