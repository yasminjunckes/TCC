const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 

const CuidadorIdosoSchema = mongoose.Schema({

    idCuidador: {
        type: String,
        require: true
    },
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
    localCuidado: {
        type: String,
        require: true
    },
    sexo: {
        type: String,
        require: true
    }
});

mongoose.model('cuidador_idoso', CuidadorIdosoSchema);