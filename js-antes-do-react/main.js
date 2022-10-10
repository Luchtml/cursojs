// // Nullish Coalescing Operator

// const idade = null
// const sapatos = 0

// document.body.innerText = 'Sua idade é:' + (idade  ?? ' Não informado')
// document.body.innerHTML += '<br>Você tem: ' + (sapatos + ' sapatos'  ?? ' Não informado')  


//Objetos 

// const user = {
//   name: 'Lucas',
//   idade: '26',
//   address: {
//     street: 'Rua teste',
//     number: '56',
//   },
// }

// //document.body.innerText = ('name' in user) // verifica se há dentro do objeto
// // document.body.innerText = Object.keys(user)// retorna todas as chaves ex: name, idade, adress...

// // document.body.innerText = Object.values(user)// me retorna todos os valores dentro das chaves

// //document.body.innerText = JSON.stringify(Object.values(user))
// //esse é o retorno completo convertido em JSON


// //document.body.innerText = JSON.stringify(Object.entries(user))
// //Me retorna as chaves e os valores delas 



// // desestruturação

// // const address = user.address

// // document.body.innerText = JSON.stringify(address)

// //nesse exemplo não houve desestruturação e ele me retornou os valores pedidos 'address'

// // const { address, idade } = user
// //sintaxe de desestruturação

// // const { address, idade: age } = user
// // alterei a chave dentro de um objeto 'idade para age'

// // const { address, idade: age, nickname = 'Luc'} = user
// //nickname recebe um valor padrão, mostrado CASO não haja valor pré definido, ou chave pré definida

// function mostraIdade ({idade}) {
//   return idade
// }

// //document.body.innerText = mostraIdade(user)

// //rest operator

// //const { name, ...rest } = user

// //me mostra o resto das propriedades do user, sem o name

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const [first, second, ...rest] = array
// const [first, , third, ...rest] = array
// //virgula vazia para deixar o inidice do elemento que não quer aparecendo
// document.body.innerText = JSON.stringify({first, third, rest})

// //short syntax

// const name = 'Lucas'
// const age = 26

// const user = {
//   name,
//   age,
// }
//NÂO precisei descrever name = name e age = age, short Syntax resume tudo
// document.body.innerText = JSON.stringify(user)


//optional chaining

// const user = {
//   name: 'Lucas',
//   age: '26',
//   address: {
//     street: 'Rua teste',
//     number: '56',
//     zip: {
//       code: '8916000',
//       city: 'Sao Jose dos Campos'
//     },
//     showFullAddress() {
//       return 'ok'
//     }
//   },
// }


// const key = 'state'


//métodos de array

// const array = [1, 2 , 3, 4, 5]
// for(const i of array){
//   document.body.innerText += i
// }
//FOrma de percorrer todo array

//document.body.innerText = user.address[key]

// const array = [1, 2 , 3, 4, 5]
// // const novoArray = []

// // array.forEach( item => {
// //   novoArray.push(item * 2)
// // })
// //Outra forma de percorrer toda array

// const novoArray = array.map(item=>{
//   if(item % 2 === 0){
//     return item * 10
//   }
  
//     return item
// })

//map, filter, every, some, find, findIndex, reduce

// const array = [1, 2 , 3, 4, 5,]
// // const novoArray = array
// // .filter(item => item % 2 === 0)
// // .map(item => item * 10)
// //const novoArray = array.filter(item => item % 2 !== 0)


// const todosItensSaoNumeros = array.every(item => {
//   return typeof item === 'number'
// })
// document.body.innerText = JSON.stringify(todosItensSaoNumeros)




// const array = [1, 2 , 3, 4, 5]
// const peloMenosUmItemNaoEUmNumero = array.some(item=> {
//   return typeof item !== 'number'
// })


// const array = [1, 2 , 3, 4, 5]
// const par = array.findIndex(item => item % 2 === 0)

// const soma = array.reduce((acc, item) => {
//   document.body.innerText += acc + ', ' + item + ' --- '

//   return acc + item
// }, 0)

// document.body.innerText += JSON.stringify(soma)

//template literals

// const user = "Lucas"
// const message = `Bem vindo, ${user ? user :  'Visitante'}`

//Promises

// .then/ .catch



// somaDoisNumeros(1, 3)
// .then(soma => {
//   //deucerto
//   document.body.innerText = soma
// })
// .catch(err => {
//   //não deu certo
//   console.log(err)
// })


// fetch('asdas')
// .then (response => {
//   return response.json()
// })
// .then(body => {
//   console.log(body)
// })
// // .then (response => {
// //   response.json().then(body => {
// //     console.log(body)
// //   })
// //})
// .catch(err=>{
//   console.log(err)
// })

// .finally(()=> {
//   console.log('deu')
// })


// async function buscaDadosNoGitHub() {
//  try {
//   const response = await fetch('https://api.github.com/users/luchtml')
//   const body = await response.json()
//   return body.name
//  } catch (err) {
//   console.log(err)
//  } finally {
//   console.log('deu')
//  }
//   //   fetch('asdas')
// // .then (response => {
// //   return response.json()
// // })
// // .then(body => {
// //   console.log(body)
// // })
// // .catch(err=>{
// //   console.log(err)
// // })

// // .finally(()=> {
// //   console.log('deu')
// // })

// }

// buscaDadosNoGitHub().then(name => {
//   console.log(name)
// })


