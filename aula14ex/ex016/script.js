function contar() {
    var ini = document.querySelector('input#ini')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#pas')
    var res = document.querySelector('div#res')
    if (ini.value.length == 0 || fim.value.length == 0 ) {
        res.innerHTML = 'Você precisa digitar um número no inicio e no fim'
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    } 
    if (p <= 0) {
        window.alert('O passo não pode ser menor que 1, considerando passo como 1')
        p = 1
    } 
    if (i < f) {
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} ` 
        }
    } else {
        for (var c = i; c >=f; c-=p) {
            res.innerHTML += `${c} `
        }
    }
    
}