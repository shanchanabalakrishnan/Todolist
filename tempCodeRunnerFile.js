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
    
