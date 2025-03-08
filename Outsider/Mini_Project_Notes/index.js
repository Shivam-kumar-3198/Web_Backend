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

app.listen(3000, function () {
    console.log("It's running");
});
