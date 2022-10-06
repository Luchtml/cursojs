let x = 0

let myTimer = setTimeout(function(){
    console.log('O x é 0')
},1500)

x = 5

if (x > 0) {
    clearTimeout(myTimer)
    console.log('O x passou de 0')
}

//clearsetInterval

let myInterval = setInterval(function(){
    console.log('imprimindo interval')
}, 500)

setTimeout(function(){
    console.log('Não precisamos mais repetir')
    clearInterval(myInterval)
}, 1500)