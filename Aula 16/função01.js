/*
Exemplo de resultado Impar:
function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimp(25)
console.log(res)
*/

/*
Exemplo Par:
function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
let res = parimpar(10)
console.log(res)
*/

/* No exemplo abaixo ao invés de declarar uma var, eu coloco para o prompt ja escrever na 
tela e o número que ele vai precisar saber se é Par ou Impar, mais "rápido"*/ 
function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
console.log(parimpar(250))