const pessoa ={
    saudacao: 'Bom dia!',
    saudacao2: 'Boa tarde!',

    falar() {
        console.log(this.saudacao);
        console.log(this.saudacao2);
    }
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();