const express = require('express');
const app = express(); 
const path = require('path'); 
const bodyParser = require('body-parser');

//Config body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

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
    resp.sendFile(__dirname + '/html/index.html'); 
});


app.get('/cadastro', function(req, resp) {
    resp.render('cadastro');
});

app.get('/busca_cuidador', function(req, resp) {
    resp.render('busca_cuidador');    
});

app.post('/busca_cuidador', function(req, resp) {
    var categoriaCuidado = req.body.nmCategoria;
    var tipoCuidado = req.body.nmTipoCuidado;
    var sexo = req.body.nmSexo;
    var idade = req.body.nmIdade;  
    var data = req.body.nmData;   
    var hora = req.body.nmHora;   

    usuario.find()  
    .then(function(doc) {
        console.log(doc);
        resp.send(categoriaCuidado+"<br>"+tipoCuidado+"<br>"+sexo+"<br>"+idade+"<br>"+data+"<br>"+hora+"<br>"+doc);  
    });
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

//Atribuindo o schema à collection
const usuario = mongoose.model('user', UsuarioSchema);
mongoose.model('cuidador', CuidadorSchema);
mongoose.model('servico', ServicoSchema);
mongoose.model('endereco', EnderecoSchema);

/*
//Inserindo dados (Create do Crud)
new usuario({
   nome: "Ivan JB", 
   dataNasc: 1234, 
   senha: "ivan.borchardt.cobol@gmail.com",
   CPF: "43564",
   email: "jdskhf\iodsdfhxtgrf",
   tipoUsuario: "CUIDADOR",
   genero: "f",
   celular: "23435435643"
}).save()
 .then(function(){
     console.log("Usuario Cadastrado com sucesso!");
 }).catch(function(err){
     console.log("Erro do DB " + err); 
 });
 */

