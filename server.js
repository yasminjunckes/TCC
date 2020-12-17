const express = require('express');
const app = express(); 
const path = require('path'); 

const handlebars = require('express-handlebars'); 

//configuração do handlebars como template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');  

//public
app.use(express.static(path.join(__dirname, 'public'))); 

app.listen(3000, function() {
    console.log('Servidor Rodando na porta 3000...'); 
}); 

app.get('/', function(req, resp) {
    resp.sendFile(__dirname + '/html/index.html'); //renderiza o arquivo formulario no main
});

app.get('/cad', function(req, resp) {
    resp.render('formulario'); //renderiza o arquivo formulario no main
});

//MongoDB -----------------------------------------------------------------------
const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 

mongoose.connect("mongodb://localhost/allcare", {useMongoClient: true})
  .then(function() {
      console.log("MongoDB Conectado...");
  })
  .catch(function(err) {
      console.log("Erro na conexao " + err); 
  });

  const UsuarioSchema = mongoose.Schema({

    nome:{
       type: String, 
       require: true
    }, 
    senha:{
       type: Number, 
       require: true    
    }, 
    email:{
       type: String 
    }
});

//Atribuindo o schema à collection
mongoose.model('user', UsuarioSchema);

const usuario = mongoose.model('user');


//Inserindo dados (Create do Crud)
new usuario({
   nome: "Ivan JB", 
   senha: 1234, 
   email: "ivan.borchardt.cobol@gmail.com"
}).save()
 .then(function(){
     console.log("Usuario Cadastrado com sucesso!");
 }).catch(function(err){
     console.log("Erro do DB " + err); 
 });