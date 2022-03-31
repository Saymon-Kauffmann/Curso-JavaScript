let num = [10, 3, 4, 5, 8, 6]
num.sort(function(a, b){return a-b}) 
/* Comando acima coloca os valores de num em ordem crescente, mas detalhe que tenque colocar esse 
comando após o sort (function(a, b){return a-b}), pois senão ele não vai por em crecente com base nos números em si
na ordem, mas sim em ordem decimal, tipo o 10 iria la na frente do 2 só porque começa com 1*/
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)  // Comando para saber quantas posições.
console.log(num[0]) // Comando para saber qual valor esta na posição [0] que é o 7.


let pos = num.indexOf(3)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 3 esta na posição ${pos}`)
}
