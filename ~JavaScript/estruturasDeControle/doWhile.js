function getInteiroAletorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.random(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log("Até a próxima!")