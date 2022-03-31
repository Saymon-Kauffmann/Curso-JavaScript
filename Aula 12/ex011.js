var idade = 100
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    // Lembresse que é console.log para mandar digitar aqui, document.write é só no html.
    console.log('Não vota') 
// Como else e if é muito comum em JS posso juntalos ali e deixar clean (um bloco a menos).    
} else if (idade < 18 || idade > 65) { 
        console.log('Voto opcional')
    } else if (idade >= 18) { 
 // Se a idade não é menor que 18, automaticamente ela é maior que 18, então nessa linha podesse tirar o "if" ali emcima.       
        console.log('Voto obrigatório')
    }
