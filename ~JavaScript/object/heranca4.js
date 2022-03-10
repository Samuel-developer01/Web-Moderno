function MeuObjetos() {}
console.log(MeuObjetos.prototype);

const obj1 = new MeuObjetos;
const obj2 = new MeuObjetos;
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjetos.prototype === obj1.__proto__)

MeuObjetos.prototype.nome = 'Anônimo'
MeuObjetos.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Samuel'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjetos.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo
console.log((new MeuObjetos).__proto__ === MeuObjetos.prototype)
console.log(MeuObjetos.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

