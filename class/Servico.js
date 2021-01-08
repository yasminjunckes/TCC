class Servico{
    #tipo;
    #dataInicio;
    #dataFim;
    #idUsuarioCuidador;
    #idUsuarioCliente;

    // contrutor
    constructor(tipo, dataInicio, dataFim, idUsuarioCuidador, idUsuarioCliente){
        this.#tipo = tipo;
        this.#dataInicio = dataInicio;
        this.#dataFim = dataFim;
        this.#idUsuarioCuidador = idUsuarioCuidador;
        this.#idUsuarioCliente = idUsuarioCliente;
    }

    // getters
    get tipo(){
        return this.#tipo;
    }

    get dataInicio(){
        return this.#dataInicio;
    }

    get dataFim(){
        return this.#dataFim;
    }

    get idUsuarioCuidador(){
        return this.#idUsuarioCuidador;
    }

    get idUsuarioCliente(){
        return this.#idUsuarioCliente;
    }

    //setters
    set tipo(tipo){
        this.#tipo = tipo;
    }

    set dataInicio(dataInicio){
        this.#dataInicio = dataInicio;
    }

    set dataFim(dataFim){
        this.#dataFim = dataFim;
    }

    set idUsuarioCuidador(idUsuarioCuidador){
        this.#idUsuarioCuidador = idUsuarioCuidador;
    }

    set idUsuarioCliente(idUsuarioCliente){
        this.#idUsuarioCliente = idUsuarioCliente;
    }
}