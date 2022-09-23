function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'um Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`
        res.appendChild(img)
    }
}