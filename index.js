const express = require('express');
const firebase = require('firebase');
const app = express();
const fire = firebase.initializeApp();

app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: __dirname});
});

app.listen(8080, function () { // Start the server
    console.log('Server up!');
});