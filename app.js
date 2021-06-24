// Importing Express
var express = require('express');

// Creating server and setting port, resource path
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname));

// Defining routes
app.get('/', function (req, res) {
    res.sendFile('home.html', {root: __dirname});
})

app.get('/contact', function (req, res) {
    res.sendFile('contact.html', {root: __dirname});
})

// Starting server
app.listen(port, function() {
    console.log(`running server on port ${port}`)
})