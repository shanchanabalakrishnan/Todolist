const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const date = require( __dirname + "/date.js");



const items = ["Buy food", "cook food", "Eat food"];
const workItems = [];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

    const day = date.getDate();
    
    res.render("list", { listTitle: day, newListItems: items});

});


app.post("/", function(req, res){

 const item = req.body.newItem;

 if (req.body.list==="work") {

    workItems.push(item);

    res.redirect("/work");

 }else {
    
 items.push(item);

 res.redirect("/");
}

});


app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function (req, send){
    res.render("about");
})


app.listen(3000, function() {
    console.log('server started on port 3000')
});