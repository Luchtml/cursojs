let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(1)
num.sort()

console.log(`${num}`)
console.log (`O primeiro valor do vetor é ${num[0]}`)
console.log (`O vetor tem ${num.length} posições`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
console.log(`O valor 9 está na posição ${pos}`)
}