let valores = [8, 1, 7, 4, 2, 9]

/*
Aqui só remostra os valores no let na tela como 
estão dentro dela mesmo: console.log(valores) 

Forma burra, feia e grande de fazer mostrar os valores de let na tela.

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

Jeito mais organizado e bonito, mas ainda não é o melhor nem mais otimizado:

for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`) // Não esqueça os []
}
*/

/* Forma mas perfeita, clean e otimizada de todas, mas nesse exemplo deixei ela sem
mimos, só mostrando os valores mesmo, na próxima farei com o caprixo:
for (let pos in valores) {
    console.log(valores[pos])
}
*/
for (let pos in valores) {
    console.log(`A posição de ${pos} tem o valor ${valores[pos]}.`)
}