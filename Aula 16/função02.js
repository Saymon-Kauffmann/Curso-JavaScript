/* Neste caso aqui eu coloquei dois valores dentro do parametro, e depois mandei somar
la na chamada. Ficando da seguinte forma:

function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2, 5))
*/

/* 
Mas ai voce pergunta, mas e se ali no chamado eu colocar 2 para o n1, mas não colocar nada
para o n2, quando ele der o resultado ele vai retornar = NaN, pois n2 não recebeu um número.
Agora, se eu quiser eu posso fazer da seguinte forma adicionando dentro do parenteses algum
valor ao parametro que eu quiser, semelhante a dar um Id. O valor vai ficar da seguinte forma
(n1, n2=0 por exemplo) <-- isso esta indicando que, caso o n2 nao receba nem um valor lá na
chamada, ele automaticamente vai receber o valor 0, mas tambem poderia ser qualquer número
que você quisesse, e poderia ser com o n2 também, e com quantos outros parâmetros ouvesse.
*/

//Por exemplo:
function soma(n1=5, n2=3) {
    return n1 + n2
}
console.log(soma(4, 1))
/* 
Se aqui em cima eu não colocar nada no lugar do 4 e do 1 e por exemplo deixar a chave 
vazia, automaticamente ele vai somar o 5 que esta no n1 com o 3 que esta no n2, resultando
em 8.
*/