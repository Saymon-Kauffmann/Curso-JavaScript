function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 5) {
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#1b161a'
    } else if(hora >= 6 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e0c49e'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#cf823d'
    } else {
        img. src = 'fotonoite.png'
        document.body.style.background = '#182f39'
    }    
}