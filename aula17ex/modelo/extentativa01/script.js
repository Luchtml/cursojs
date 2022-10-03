let lista = document.querySelector('select#flista')
let valores = []
let res = document.querySelector('div#res')
let info = document.querySelector('option#info')

function adicionar() {
    let item = document.createElement('option')
    let num = document.querySelector('input#fnum')
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        valores.push(Number(num.value))
        info.innerHTML = 'Registrando Valores...' 
        res.innerHTML = ''       
    } else {
        window.alert('Numero ja encontrado ou inválido')
    }
    num.value = ''
    num.focus()
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
    let soma = 0
    let media = 0
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    if (valores.length != 0) {
        for(let pos in valores) {
            soma += valores[pos]
            if (valores [pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }        
            /*res.appendChild(itemRes)
            itemRes.innerHTML +=
             `<strong>${valores[pos]}</strong>, `*/
        }
        media = soma / tot
        mediaCon = parseInt(media)
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, foram adicionados ${tot} números!</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        rein.style.display = 'block'


        /*itemRes.innerHTML += `<p>Foram adicionados <strong>${valores.length}</strong> números</p>`
        itemRes.innerHTML += 
        `<p>A soma de todos os valores é <strong>${soma}</strong></p>`
        itemRes.innerHTML += 
        `<p>O maior valor adicionado é o valor <strong>${ultimo}</strong></p>`
        itemRes.innerHTML += 
            `<p>O menor valor adicionado é o valor <strong>${valores.shift(0)}</strong></p>`
        itemRes.innerHTML += 
        `<p>A média dos valores é: <strong>${soma / valores.length}</strong></p>`*/

    } else {
        alert('Não há números registrados')
    }
}

function reiniciar() {
    valores = [0]
    lista.innerHTML = `<option>Adicione números acima</option>`
    res.innerHTML = ''
    rein.style.display = 'none'
}