const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 

mongoose.connect("mongodb://localhost/allcare", {useMongoClient: true})
  .then(function() {
      console.log("MongoDB Conectado...");
  })
  .catch(function(err) {
      console.log("Erro na conexao " + err); 
  });

require('./usuario_model');
require('./cuidador_model');
require('./servico_model');
require('./endereco_model');