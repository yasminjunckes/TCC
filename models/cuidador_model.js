const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 

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

mongoose.model('cuidador', CuidadorSchema);