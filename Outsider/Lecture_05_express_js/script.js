// Express-js Framework:
// Introduction to Express.js.
// Framework -> Konsi chig kaise karni hai resources provided(Express js)
// express js ek npm package hai
// framework
// manages everything from receiving the request and giving the response

//MERN STACK
// Setting up a basic Express application.
// Routing.
// Middleware.
// Request and response handling.
// Error handling.
/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
*/
const express = require("express");
const app = express();

app.use(function(req,res,next){
   console.log('middleware chala ');
   next();
});
// routes creates karna

app.get("/", function (req, res) {
  res.send("You are a champion and server starts here");
});

app.get("/profile", function (req, res) {
  res.send("Champion coach is also working with nodemon server now ");
});

app.listen(3000);

// nodemon help karta hai live reloading me
