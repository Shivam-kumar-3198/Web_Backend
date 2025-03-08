const express = require('express');
const path = require('path'); // Ensure you require the 'path' module
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Use 'path.join' to serve static files
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render("index");
});


app.get("/profile/:username", function(req,res){  //: using : will create dynamic routing
    // req.params.username
    res.send(`Welcome,${req.params.username}`);
});

app.get("/profile/:username/:age", function(req,res){
    res.send(`Welcome,${req.params.username} of age ${req.params.age}`);
});

app.listen(3000, function () {
    console.log("It's running");
});
