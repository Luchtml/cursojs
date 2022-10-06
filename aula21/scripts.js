function exibir(num) {
    console.log("A oepração resultou em: " + num)
}

function soma(a, b, callback) {
    let op = a + b
    callback(op)
}

function multiplicacao(a, b, cb){
    let op = a * b
    cb(op)
}

soma(2, 2, exibir)
multiplicacao(2, 4, exibir)