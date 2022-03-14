class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    metodos() {
        if(this.nome != null){
            return `Meu nome é ${this.nome}`
        } else {
            return 'Nome não definido'
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.nome = 'Samuel'
const pessoa2 = new Pessoa
pessoa2.nome = 'Almeida'
const pessoa3 = new Pessoa
pessoa3.nome = 'Eric'

console.log(pessoa1.metodos())
console.log(pessoa2.metodos())
console.log(pessoa3.metodos())