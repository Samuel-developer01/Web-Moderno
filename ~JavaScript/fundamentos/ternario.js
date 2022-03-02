const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(7.1))
console.log(resultado(6.7))

const resultado2 = nota => {
    return nota >= 10 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado2(8))
console.log(resultado2(115.5))