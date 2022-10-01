let num = document.querySelector ('input#inum')
let lista = document.querySelector ('select#selnumeros')
let res = document.querySelector('div#res')
let valores = []

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
//essas funções aguardam serem chamadas

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
//Se valores(l) for diferente de -1 (não está na lista)
    } else {
        return false
//Se valores(l) for igual a 1 (está na lista)
    }
}
//essas funções aguardam serem chamadas

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo Ok')
//se num.value passar na função isNumero e retornar true
    } else {
        window.alert('Valor inválido ou já registrado na lista')
//se num.value passar na função isNumero e retornar false
    }
}
// essa função chama e determina parâmetros para as outras duas funções
