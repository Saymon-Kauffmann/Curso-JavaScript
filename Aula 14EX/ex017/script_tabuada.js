function mostrarTabuada() {
    var numbers = document.getElementById('NUMBERS')
    var SELECT = document.getElementById('oSelect')
    if (numbers.value.length == 0) {
        window.alert('[ERRO] Digite um número por favor!')
    } else {
        var numeros = Number(numbers.value)
        SELECT.innerHTML = ''
        for (var numb = 1; numb <= 100; numb++) {
            var item = document.createElement('option')
            item.text = `${numeros} x ${numb} = ${numeros*numb}`
            item.value = `tab${numb}` // Esse comando aqui serve para as outras linguagens lerem melhor o código.
            SELECT.appendChild(item) // Faz a tabuada aparecer abaixo aonde ela deveria aparecer.
        }
    }
}