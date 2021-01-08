const express = require('express');
const app = express(); 
const path = require('path'); 
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars'); 

//Config body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

//configuração do handlebars como template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');  

//public
app.use(express.static(path.join(__dirname, 'public'))); 

//MongoDB
require('./models/db');

//testando conexao com db
app.listen(3000, function() {
    console.log('Servidor Rodando na porta 3000...'); 
}); 

//rota inicial
app.get('/', function(req, resp) {
    resp.render('index'); 
});

//controller cadastro
const cadastro = require('./controllers/controller_cadastro');
app.use('/cadastro', cadastro);

//controller busca_cuidador
const busca_cuidador = require('./controllers/controller_busca_cuidador');
app.use('/busca_cuidador', busca_cuidador);

//controller quem_somos
const quem_somos = require('./controllers/controller_quem_somos');
app.use('/quem_somos', quem_somos);

//controller quem_somos
const login = require('./controllers/controller_login');
app.use('/login', login);

//controller fale_conosco
const contato = require('./controllers/controller_contato');
app.use('/contato', contato);