/*
const fs = require('fs');

fs.copyFile("hello.txt", "./Outsider/chacha.txt", function(err){
    if(err) console.error(err.message);
    else console.log("done");
})
    */
//    unlink----->

const fs = require('fs');

fs.unlink("hello.txt", function(err){
    if(err) console.error(err);
    else console.log("removed");
})