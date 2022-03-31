function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //criançã
                img.setAttribute('src', 'crianca-pia.png')
            } else if (idade < 21)  {// Poderia ter o comando idade >= 13 &&  ali no começo, mas como ja setemos até 12 ali atrás o comando ja entende que é de 12 até 21.
               //jovem
               img.setAttribute('src', 'foto-menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-home.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-veio.png')
            }      
        } else if (fsex[1].checked) {
          genero = 'Mulher'
          if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'crianca-menina.png')
            } else if (idade < 21) {
            img.setAttribute('src', 'foto-menina.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-muie.png')
            } else {
                img.setAttribute('src', 'foto-veia.png')
            }
        }      
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img) //esse comando que faz a imagem da criança "aparecer" embaixo da mensagem.
    }
}