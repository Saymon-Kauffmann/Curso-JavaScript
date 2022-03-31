var agora = new Date() // Antes de colocar o getHours ou days e etc, tenque por esse comando new date em uma var.
var hora = agora.getHours() // Aqui foi usado de exemplo horas, mas poderia ser year, day e etc.
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <=18) {
    console.log('Boa tarde!')
}else {
    console.log('Boa noite!')
    /* Detalhe: Aqui em cima não foi colocado < ou > no boa noite pois ja estava 
    setado até oque ocorrer de 1 até 12,e 12 até 18 oque deveria acontecer automa-
    ticamente tudo oque vier depois do 18 seria boa noite, lógica basica, e evita
    muito comandos desnecessarios.*/
}
