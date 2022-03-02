const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c}
console.log(obj1, obj2)

const nomeObj = 'nota'
const valorObj = 7.87

const obj3 = {}
obj3[nomeObj] = valorObj
console.log(obj3)

const obj4 = {[nomeObj]: valorObj}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2(){
        // ...
    }
}
console.log(obj5)