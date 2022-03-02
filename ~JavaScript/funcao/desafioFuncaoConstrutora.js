class Pessoa1 {
    constructor(nome) {
        return nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

function Pessoa2(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa2('João')
p1.falar()