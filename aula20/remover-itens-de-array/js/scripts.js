// pop remove um elemento no fim
let arr = [1,2,3,4,5]
let remover = arr.pop()

console.log(arr)
console.log(remover)





// shift remove do começo da array

let arr2 = [1,2,3,4,5]
let remover2 = arr2.shift()

console.log(arr)
console.log(remover2)




// splcie remover pelo indice do elemento

let arr3 = [1,2,3,4,5]

let remover3 = arr3.splice(2, 1)
//declara o indice a ser removido, e quantos elementos vou remover

console.log(remover3)
console.log(arr3)

let outraArray = arr3.splice(0, 3)

console.log(arr3)
