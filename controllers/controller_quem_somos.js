const express = require('express');
const app = express(); 

app.get('/', function(req, resp){
    resp.render("quem_somos");
});

module.exports = app;