function contar() {
    var inic = document.querySelector('input#ini')
    var final = document.querySelector('input#fim')
    var passo = document.querySelector('input#pas')
    var res = document.querySelector('div#res')
    
    if (inic.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(inic.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('O passo não pode ser menor que 1, contabilizando valor 1')
            p = 1 
        }
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} ➡`
        }
                    
        } else {
            //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} ➡`   
            }
        }
        res.innerHTML += ` 💥`
    }
}
