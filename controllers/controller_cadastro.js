const express = require('express');
const app = express(); 
const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise;
const Usuario = mongoose.model('usuario');

app.get('/', function(req, resp) {
    resp.render('cadastro');
});

app.post('/', function(req, resp) {
    console.log(req.body)
    cadastrarDadosDb(req, resp);
});

function cadastrarDadosDb(req, resp){
    var novoUsuario = new Usuario({
        nome : req.body.nmNome,
        dataNasc : req.body.nmDataNasc,
        genero : req.body.nmGenero,
        celular : req.body.nmTelefones,
        CPF : req.body.nmCpf,
        email : req.body.nmEmail,
        senha : req.body.nmSenha,
        tipoUsuario : "teste",
    }).save()
    .then(function(){
        console.log("Usuario Cadastrado com sucesso!");
        resp.render('index');
        
    }).catch(function(err){
        console.log("Erro do DB " + err); 
    });
}

module.exports = app;