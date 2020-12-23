const express = require('express');
const app = express(); 
const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise;
const Usuario = mongoose.model('usuario');

app.get('/', function(req, resp) {
    resp.render('busca_cuidador');    
});

app.post('/', function(req, resp) {
    var categoriaCuidado = req.body.nmCategoria;
    var tipoCuidado = req.body.nmTipoCuidado;
    var sexo = req.body.nmSexo;
    var idade = req.body.nmIdade;  
    var data = req.body.nmData;   
    var hora = req.body.nmHora;   

    Usuario.find()  
    .then(function(doc) {
        console.log(doc);
        resp.send(categoriaCuidado+"<br>"+tipoCuidado+"<br>"+sexo+"<br>"+idade+"<br>"+data+"<br>"+hora+"<br>"+doc);  
    });
});

module.exports = app;