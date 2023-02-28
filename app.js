const express = require("express");
var items = ["Buy food", "cook food", "Eat food"];

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    var today = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("eng-US", option);

    res.render("list", { kindOfDay: day, newListItems: items});

});


app.post("/", function(req, res){
 var item = req.body.newItem;

 items.push(item);

 res.redirect("/");

});

app.listen(3000, function() {
    console.log('server started on port 3000')
});