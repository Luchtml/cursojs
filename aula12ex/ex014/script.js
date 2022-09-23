function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msgAbaixo = document.getElementById('msg2') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'foto-manha.png'
        msgAbaixo.innerHTML = 'Bom Dia'
        document.body.style.background = '#e0ca9a'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'foto-tarde.png'
        msgAbaixo.innerHTML = 'Boa Tarde'
        document.body.style.background = '#fea70b'
    } else {
        img.src = 'foto-noite.png'
        msgAbaixo.innerHTML = 'Boa Noite'
        document.body.style.background = '#262428'
    }
}
