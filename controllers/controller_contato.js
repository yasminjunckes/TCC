const express = require('express');
const app = express(); 

app.get('/', function(req, resp){
    resp.render("contato");
});

module.exports = app;