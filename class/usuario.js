
class usuario {
    constructor(nome, dataNasc, avaliacao, senha, cpf, email, tipoUsuario, genero, celular) {
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.avaliacao = avaliacao;
        this.senha = senha;
        this.cpf = cpf;
        this.email = email;
        this.tipoUsuario = tipoUsuario;
        this.genero = genero;
        this.celular = celular;
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setDataNasc(dataNasc) {
        this.dataNasc = dataNasc
    }

    setDataNasc() {
        return this.dataNasc
    }

    setAvaliacao(avaliacao) {
        this.avaliacao = avaliacao
    }

    getAvaliacao() {
        return this.avaliacao
    }

    setSenha(senha) {
        this.senha = senha
    }

    getSenha() {
        return this.senha
    }

    setCpf(cpf) {
        this.cpf = cpf
    }

    getCpf() {
        return this.cpf
    }

    setEmail(email) {
        this.email = email
    }

    getEmail() {
        return this.email
    }

    setTipoUsuario(tipoUsuario) {
        this.tipoUsuario = tipoUsuario
    }

    getTipoUsuario() {
        return this.tipoUsuario
    }

    setGenero(genero) {
        this.genero = genero
    }

    getGenero() {
        return this.genero
    }

    setCelular(celular) {
        this.celular = celular
    }

    getCelular() {
        return this.celular
    }

    TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
    }

    TestaEmail(email) {
        usuario = email.substring(0, email.indexOf("@"));
        dominio = email.substring(email.indexOf("@") + 1, email.length);
        if ((usuario.length >= 1) &&
            (dominio.length >= 3) &&
            (usuario.search("@") == -1) &&
            (dominio.search("@") == -1) &&
            (usuario.search(" ") == -1) &&
            (dominio.search(" ") == -1) &&
            (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {

            alert("email valido");
        }
        else {

            alert("E-mail invalido");
        }
    }

}