const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 

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

mongoose.model('servico', ServicoSchema);