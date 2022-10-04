let arr = [1, 2, 3, 4, 5]
let [num1, num2, num3, num4, num5] = arr
//destruturing com arrays
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)

//com objetos
const pessoa = {
    nome: 'Lucas',
    profissao: 'Programador',
    idade: 26
}

let {nome: nomeVar, profissao: profissaoVar, idade: idadeVar} = pessoa
console.log(nomeVar)
console.log(profissaoVar)
console.log(idadeVar)

//com funções
function teste(){
    return['teste', 45]
}

let [varA, varB] = teste()

console.log(varA)
console.log(varB)

//ignorando elementos
let arrDois = [5, 10, 15]

const [, dez, quinze] = arrDois
console.log(dez)
console.log(quinze)

//strings
let novaString = 'laranja'
const [z,x,v, t, u, g, a] = novaString
console.log(z,x,v, t, u, g, a)

//rest operator: ...
let numeros2 = [1,2,3,4,5,6,7,8,9]
const [um, ...resto] = numeros2
console.log(um)
console.log(resto)

//tomar cuidado

let obj2 = {
    x: 1,
    z: 2
}

let p, q

({x: p, z: q} = obj2)

console.log(p, q)