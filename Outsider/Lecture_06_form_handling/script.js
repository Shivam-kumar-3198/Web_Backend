const express = require('express');
const app = express();

app.use(express.jsom());
app.use(express.urlencoded({ extended: true}));

app.get("/", function(req,res){
    res.send("Champion hai shivam");
});

app.get("about", function(req,res){
    res.send("ye about page hai");
});