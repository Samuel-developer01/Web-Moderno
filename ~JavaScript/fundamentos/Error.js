function tratarErrorELancar(erro) {
    // new Error('Erro no sistema')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberta' }
imprimirNomeGritado(obj)