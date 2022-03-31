let amigo = {nome: 'Billy', 
sexo: 'M', 
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}} // Pode escrever assim se quiser também. Não exaaatamente tudo na mesma linha.
/*
 console.log(amigo), com esse comando ele mostra tudo em amigo, agora se voce quiser por
exemplo escrever só o nome, ou nome e peso, e entre outros, pode fazer da seguinte maneira:
*/

amigo.engordar(2) /* Aqui vou estar ativando a função que estava guardada no objeto, e no
final ao invés de sair 85.4Kg vai sair 87.4 pois eu mandei aumentar dois ali na function.*/
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg.`)











/* 
Console.log(typeof amigo) esse comando aqui era só pra mostrar que amigo é object. Agora
uma coisa confusa mas doida é que se você substituir a {}, por [], o Js ainda sim vai falar
ali no typeof que amigo é object, ai se fica tipo ???, mas a explicação é simples, isso 
ocorre porque array no Js também é um objeto, tipo array é object e object é object hahaha. 
*/ 