
// use express pacjage
const express = require('express');
// define this is express app
const app = express();
// define port listen
const port = 3000;

// in path / display in body hello world
app.get('/', (req,res) => {
    // res.send('hello, ziad'); // to write text in html specifically in body
    // res.sendFile('./view/homepage.html', {root: __dirname}) to display in html file
})

// define listen and funcrion 
app.listen(port, () => {
    console.log('app listen from port 3000 :)');
})

/*
npm init 
touch app.js
npm install express
*/ 