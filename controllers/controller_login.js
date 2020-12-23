const express = require('express');
const app = express(); 

app.get('/', function(req, resp){
    resp.render("login");
});

module.exports = app;