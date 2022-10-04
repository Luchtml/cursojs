/*var nome = 'Pedro'

function dizerNome() {
    var nome = 'João'
    console.log('O nome é ' + nome)
}
if (true) {
    var nome = 'Salete'
}
console.log(nome)
dizerNome()*/

let nome = 'Pedro'
// let nome = 'Rodrigo' usado em blocos, caso seja global, é um 'bloco' global
const numero = 1
// o valor da constante não pode ser modificado depois de iniciado. 
// se necessário mudar o valor, usar let.

function dizerNome() {
    var nome = 'João'
    console.log('O nome é ' + nome)
}
if (true) {
    let nome = 'Salete'
    const numero = 2
    console.log(nome)
    console.log(numero)
}
console.log(nome)
console.log(numero)
dizerNome()

for (let i = 0; i < 3; i++) {
    let nome = 'Anisio'
    const numero = 3
    console.log(nome)
    console.log(numero)
}
