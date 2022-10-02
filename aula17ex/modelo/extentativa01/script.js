let lista = document.querySelector('select#flista')
let valores = []
let res = document.querySelector('div#res')
let info = document.querySelector('option#info')

function adicionar() {
    let item = document.createElement('option')
    let num = document.querySelector('input#fnum')
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

function pegarRegistro() {
    valores.sort
    let soma = 0
    let itemRes = document.createElement('p')
    let ultimo = valores[valores.length - 1]
    if (valores.length != 0) {
        for(let pos in valores) {        
            res.appendChild(itemRes)
            itemRes.innerHTML +=
             `<strong>${valores[pos]}</strong>, `
        }
        for (let i=0; i < valores.length;i++){
            soma += valores[i]
        }
        itemRes.innerHTML += `<br><br>Foram adicionados <strong>${valores.length}</strong> números`
        itemRes.innerHTML += 
        `<br><br>A soma de todos os valores é <strong>${soma}</strong<br><br>`
        itemRes.innerHTML += 
        `O maior valor adicionado é o valor <strong>${ultimo}</strong><br><br>`
        itemRes.innerHTML += 
            `O menor valor adicionado é o valor <strong>${valores.shift(0)}</strong><br><br>`
        itemRes.innerHTML += 
        `A média dos valores é: <strong>${soma % valores.length}</strong>`

    } else {
        alert('Não há números registrados')
    }
}