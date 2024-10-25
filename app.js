
// use express pacjage
const express = require('express');
// define this is express app
const app = express();
// define port listen
const port = 3000;

// in path / display in body hello world
app.get('/', (req,res) => {
    // res.send('hello, ziad'); // to write text in html specifically in body
    res.sendFile('./view/homepage.html', {root: __dirname}) //to display in html file
})

const mongoose = require('mongoose');

// connect to mongodb
// pass : qh63O5tLKPtkmqNA
mongoose.
connect("mongodb+srv://ziadFawzy:qh63O5tLKPtkmqNA@cluster0.t8gc3.mongodb.net/get-data?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    // define listen and funcrion 
    app.listen(port, () => {
        console.log('app listen from port 3000 :)');
    })
}).catch((err) => {
    console.log(err)
})

/*
npm init 
touch app.js
npm install express
*/ 