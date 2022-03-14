const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Samuel',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome:'Turma M2',
    alunos: [{
        nome:'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota:7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurmas = turma => turma.alunos.map(getNotaDoAluno)

const nota1 = escola.map(getNotasDaTurmas)
console.log(nota1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ] ))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotasDaTurmas)
console.log(nota2)