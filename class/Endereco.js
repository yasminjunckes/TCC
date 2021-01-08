class Endereco {
    #cep;
    #estado;
    #cidade;
    #rua;
    #numero;
    #logradouro;
    #idUsuario

    // constructor

    constructor (cep,estado,cidade,rua,numero,logradouro,idUsuario){
        this.#cep = cep;
        this.#estado = estado;
        this.#cidade = cidade;
        this.#rua = rua;
        this.#numero = numero;
        this.#logradouro = logradouro;
        this.#idUsuario = idUsuario;
    }

    // getters

    get cep(){
        return this.#cep;
    }
    get estado(){
        return this.#estado;
    }
    get cidade(){
        return this.#cidade;
    }
    get rua(){
        return this.#rua;
    }
    get numero(){
        return this.#numero;
    }
    get logradouro(){
        return this.#logradouro;
    }
    get idUsuario(){
        return this.#idUsuario;
    }

    //setters

    set cep(cep){
        this.#cep = cep;
    }
    set estado(estado){
        this.#estado = estado;
    }
    set cidade(cidade){
        this.#cidade = cidade;
    }
    set rua(rua){
        this.#rua = rua;
    }
    set numero(numero){
        this.#numero = numero;
    }
    set logradouro(logradouro){
        this.#logradouro = logradouro;
    }
    set idUsuario(idUsuario){
        this.#idUsuario = idUsuario;
    }
}