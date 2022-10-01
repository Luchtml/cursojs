const lista = document.querySelector('select#flista')
const valores = []
const res = document.querySelector('div#res')
const info = document.querySelector('option#info')

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

    /* 1 - Mostrar total de números
       2 - Mostrar o maior valor
       3 - Mostrar o menor valor
       4 - mostrar a soma dos valores 
       5 - mostrar a média dos valores obs: mostrar somente 2 casas decimais!
    */

function pegarRegistro() {
    const itemRes = document.createElement('p')
    if (valores.length != 0) {
        for(const pos in valores) {
            res.appendChild(itemRes)
            itemRes.innerHTML = `A posição ${pos} tem o valor ${valores[pos]}`
        }


    } else {
        alert('Não há números registrados')
    }
}