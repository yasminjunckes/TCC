const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 

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

mongoose.model('endereco', EnderecoSchema);