var agora = new Date() // Não esqueça que o D do Date sera SEMPRE maiúsculo.
var diaSem = agora.getDay()
/* 
 Agora lembre do seguinte, getDay ali não vai dar pra você todos os dias da semana. Nem
mesmo se é Segunda, Terça ou etc, nem mesmo o número(Tipo dia 21, 15 e etc), ele vai dar
0, 1, 2, 3, 4, 5, 6, que são respectivamente:
0 = Domingo
1 = Segunda        / No dia da aula eu dei console.log(diaSem) e ele devolveu: 6, ou seja
2 = Terça            era um sábado /
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break    

}
/* RESALTANDO DENOVO, "NUNCA" ESQUEÇA O BREAK. E lembresse tambem que o break só funciona
com numero inteiros e carácteres('strings'), Sendo um pouco limitado por isso mas muito util.*/
