let lista = document.querySelector('select#flista')
let valores = []
let res = document.querySelector('div#res')
let info = document.querySelector('option#info')

function adicionar() {
    const item = document.createElement('option')
    const num = document.querySelector('input#fnum')
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        lista.appendChild(item)
        valores.push(Number(num.value))
        item.text = `Valor ${num.value} adicionado`
        info.innerHTML = 'Registrando Valores...'        
    } else {
        window.alert('Numero ja encontrado ou inválido')
    }
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}