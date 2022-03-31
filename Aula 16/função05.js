/*
 Ainda podemos fazer o fatorial de uma outra maneira, de forma recursiva, que funciona da
 seuinte forma, quando queremos o 5! na formula podemos ver que 5! = 5 x 4 x 3 x 2 x 1.
 agora, você percebeu que ali no 5 x 4, apartir do quatro é como se ele estivesse fazendo o
 4 x 3 x 2 x 1, e é isso mesmo, o oque vem após o 4 é como se fosse o calculo fatorial dele,
 e a mesma coisa para 3 x 2 x 1, e para 2 x 1, e assim podemos otimzar muito fazendo da 
 seguinte maneira 5! x 4!, que seria o fatorial de 5 x o fatorial de 4 (da mesma forma que 
 por exemplo: n! = n x (n-1)!), e o resultado é igual ao da forma que fizemos anteriormente,
 agora, o calculo em código fica da seguinte forma:
*/

//RECURSIVIDADE:
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) 
        /* Aqui o n é 5!, e o fatorial(n-1) é nd+ nd- que o 4! pois o comando era n-1
        ou seja 5-1=4, OU SEJA 5! * 4!, AGORA TUDO FAZ SENTIDO!*/
    }
}
console.log(fatorial(10))