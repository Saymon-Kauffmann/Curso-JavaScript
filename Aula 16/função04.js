/* 
Neste exemplo iremos aprender a executar a função para calcular o fatorial de um número.
E lembre que o fatorial de um número(!). É fazer o seguinte calculo(usando aqui por exemplo
o 5). Ex: 5! = 5 x 4 x 3 x 2 x 1 = 120. E em código fica da seguinte maneira:
*/
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

/*
Neste caso aqui é o seguinte, para explica o porque que a fatoração acima funciona, 
basicamente o fat vai ser igual o n (fat=n), a expressão esta descrita da seguinte maneira:
para (for) variavel c recebe o valor de n(ou seja, 5 neste caso) enquanto 5 for maior que 1
ele vai diminuir 1 do 5 a cada looping e começar denovo(c > 1; c--). E quando terminar mostra
o valor total da fatoração (return fat). Oque não estava ficando claro e que voce não entendeu
de primeira era que ele não desconta 1 do 5(c--) logo no primeiro looping, no primeiro looping
a var (naquele caso ali let fat =)recebe o cinco, SEM DIMINUIR deixando 4, ele continua 5 pois
na primeira chegada o fat valia 1 então fez 1 * 5 = 5 e a fat passou a valer 5, ai agora que
chegamos ao proximo looping onde chega 5 maior que um, e então diminui 1, ficando 4, e como
anteriormente o 5 chegou no fat e substituiu o valor um, fat agora vale 5, a conta ficando
então 5 * 4 = 20, e assim segue, o loop mais uma vez aonde chegara 3 * 20 = 60, e por fim
2 * 60 = 120, e assim fica a explicação, que no fim era bem fácil, mas confunde facilmente 
ficando confusa.
*/

