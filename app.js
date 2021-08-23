// Importing Express
var express = require('express');

// Creating server and setting port, resource path
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname));

/*
    Defining routes
*/
app.get('/', function (req, res) {
    res.sendFile('home.html', {root: __dirname});
})

app.get('/contact', function (req, res) {
    res.sendFile('contact.html', {root: __dirname});
})

// Projects
app.get('/:projectName', function (req, res) {
    res.sendFile(`projects/${req.params.projectName}.html`, {root:__dirname});
})

// Google Domain verification
app.get('/google8eaa6c0f88ac5211.html', function (req, res) {
    res.sendFile('google_verification.html', {root: __dirname});
})

// Starting server
app.listen(port, function() {
    console.log(`running server on port ${port}`)
})