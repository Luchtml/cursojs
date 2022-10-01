    let numeroTxt = document.querySelector('input#inum')
    let numeroAdicionado = Number(numeroTxt.value)
    let registro = document.querySelector('select#selnumeros')
    let infor = document.querySelector('option#info')
    let numeros = []
    let item = document.createElement('option')
    let res = document.querySelector('div#res')
  

    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100)
        return true
    } else {
        return false
    }

    function inRegistro(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

    function adicionar() {

        if (isNumero(numeroAdicionado) && !inRegistro(numeroAdicionado, numeros)) {

        } else {
            window.alert('Valor inválido ou já encontrado na lista')
        }else if (numeroAdicionado == 0 || numeroAdicionado < 1 || numeroAdicionado > 100) {
            window.alert('Você deve digitar um valor entre 1 a 100')
        } else if (numeros.indexOf(numeroAdicionado) === -1) {
            numeros.push(numeroAdicionado)
            infor.innerHTML = 'Registrando...'
            item.text = `Valor ${numeros} adicionado`
            registro.appendChild(item)                       
        } else if (numeros.indexOf(numeroAdicionado) > -1) {
            infor.innerHTML = 'O número já está registrado!'        
        }
    
}
