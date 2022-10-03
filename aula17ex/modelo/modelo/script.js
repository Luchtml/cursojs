let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let valores = []
let res = document.querySelector('div#res')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo ok')
    } else {
        window.alert('Numero ja encontrado ou inválido')
    }
}