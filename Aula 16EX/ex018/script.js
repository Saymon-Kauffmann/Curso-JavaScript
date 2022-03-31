let number = document.querySelector('input#onumero')
let list = document.querySelector('select#alista')
let result = document.querySelector('div#resultado')
let valores = []
valores.sort((a, b) => a - b)

function eNUMERO(n) {
    if (Number(n) >= 1 && Number(n) <= 1000) {
        return true
    } else {
        return false
    }
}

function eLISTA(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} 

function Limpar() {
    result.innerHTML = ''
    list.innerHTML = ''
    
    
}

function Adicionar() {
    if (eNUMERO(number.value) && !eLISTA(number.value, valores)) {
        valores.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `O valor ${number.value} adicionado.`
        list.appendChild(item)
        result.innerHTML = ''
    } else {
        window.alert(`O número adicionado ja esta na lista ou é inválido!`)
    }
    number.value = ''
    number.focus()
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert(`Por favor, adicione valores antes de continuar.`)
    } else {
        let oTotal = valores.length
        let oMaior = valores[0]
        let oMenor = valores[0]
        let aMedia = 0
        let aSoma = 0 
        for (let pos in valores) {
            aSoma += valores[pos]
            if (valores[pos] > oMaior)
            oMaior = valores[pos]
            if (valores[pos] < oMenor)
            oMenor = valores[pos]
        }
        aMedia = aSoma / oTotal
        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo, ${oTotal} números foram cadastrados.</p>`
        result.innerHTML += `<p>O maior número informado foi ${oMaior}.</p>`
        result.innerHTML += `<p>O menor número informado foi ${oMenor}.</p>`
        result.innerHTML += `<p>Somando todos os numeros temos de resultado ${aSoma}.</p>`
        result.innerHTML += `<p>A média entre todos os números cadastrados é de ${aMedia}.</p>`
    }
}
