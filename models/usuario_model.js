const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 

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

mongoose.model('usuario', UsuarioSchema);