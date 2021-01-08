class Cuidador{
    #agenda;
    #valor;
    #descricao;
    #cachorro;
    #idoso;
    #crianca;
    #idCuidador;

    // contrutor
    constructor(agenda, valor, descricao, cachorro, idoso, crianca, idCuidador){
        this.#agenda = agenda;
        this.#valor = valor;
        this.#descricao = descricao;
        this.#cachorro = cachorro;
        this.#idoso = idoso;
        this.#crianca = crianca;
        this.#idCuidador = idCuidador;
    }

    // getters
    get agenda(){
        return this.#agenda;
    }

    get valor(){
        return this.#valor;
    }

    get descricao(){
        return this.#descricao;
    }

    get cachorro(){
        return this.#cachorro;
    }

    get idoso(){
        return this.#idoso;
    }

    get crianca(){
        return this.#crianca;
    }

    get idCuidador(){
        return this.#idCuidador;
    }

    //setters
    set agenda(agenda){
        this.#agenda = agenda;
    }

    set valor(valor){
        this.#valor = valor;
    }

    set descricao(descricao){
        this.#descricao = descricao;
    }

    set cachorro(cachorro){
        this.#cachorro = cachorro;
    }

    set idoso(idoso){
        this.#idoso = idoso;
    }

    set crianca(crianca){
        this.#crianca = crianca;
    }

    set idCuidador(idCuidador){
        this.#idCuidador = idCuidador;
    }
}