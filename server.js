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

app.get('/cadastro', function(req, resp) {
    resp.render('cadastro'); //renderiza o arquivo formulario no main
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
    
    nome: {
        type: String,
        require: true
    },
    dataNasc: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    },
    CPF: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    tipoUsuario: {
        type: String,
        require: true
    },
    genero:{
        type: String,
        require: true
    },
    celular:{
        type: String,
        require: true
    }
});

const CuidadorSchema = mongoose.Schema({

    agenda: {
        type: String,
        require: true
    },
    valor: {
        type: Number,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    cachorro: {
        type: Boolean,
        require: true
    },
    idoso: {
        type: Boolean,
        require: true
    },
    crianca: {
        type: Boolean,
        require: true
    },
    idCuidador: {
        type: String,
        require: true
    }

});

const ServicoSchema = mongoose.Schema({

    tipo: {
        type: String,
        require: true
    },
    dataInicio: {
        type: String,
        require: true
    },
    dataFim: {
        type: String,
        require: true
    },
    idUsuarioCuidador: {
        type: String,
        require: true
    },
    idUsuarioCliente: {
        type: String,
        require: true
    }
    
});

const EnderecoSchema = mongoose.Schema({

    cep: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    rua: {
        type: String,
        require: true
    },
    numero: {
        type: String,
        require: true
    },
    logradouro: {
        type: String,
        require: true
    },
    idUsuario: {
        type: String,
        require: true
    }
});
/*
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
 */