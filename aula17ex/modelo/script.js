function adicionar() {
    var numeroTxt = document.querySelector('input#inum')
    var numeroAdicionado = Number(numeroTxt.value)
    var registro = document.querySelector('select#selnumeros')
    var infor = document.querySelector('option#info')
    var numeros = []
    var item = document.createElement('option')
    if (numeroAdicionado == 0 || numeroAdicionado < 1 || numeroAdicionado > 100) {
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
