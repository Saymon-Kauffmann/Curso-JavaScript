window.alert('Seja muito bem vindo(a)!')
function ativar() {
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var steps = document.getElementById('steps')
    var result = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || steps.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        result.innerHTML = 'Contando: <br>'
        var começo = Number(start.value)
        var final = Number(end.value)
        var passos = Number(steps.value)
        if (passos <= 0) {
            window.alert('Passo inválido! Considerando PASSOS = 1')
            passos = 1
        }
        if (começo < final) {
            for (var c = começo; c <= final; c += passos) {
                result.innerHTML += `${c} \u{1F6B6}`
            }
        } else {
            for (var c = começo; c >= final; c -= passos) {
                result.innerHTML += ` ${c} \u{1F6B6}`
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}
