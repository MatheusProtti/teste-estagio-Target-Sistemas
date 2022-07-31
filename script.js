// 2) Dado a sequência de Fibonacci
console.log("-------------------------------------------")
console.log("Questão 2)")
fib(21)
console.log("-------------------------------------------")
// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora
console.log("Questão 3)")
console.log("O menor valor de faturamento ocorrido em um dia do mês foi: " + menorValorDeFaturamentoEmUmDiaDoMes())
console.log("O maior valor de faturamento ocorrido em um dia do mês foi: " + maiorValorDeFaturamentoEmUmDiaDoMes())
console.log("Média Mensal: " + mediaMensal())
numeroDeDiasNoMesQueValorDeFaturamentoDiarioFoiSuperiorMediaMensal()
console.log("-------------------------------------------")
// 4) Dado o valor de faturamento mensal de uma distribuidora
console.log("Questão 4)")
calculaPercentualDeRepresentação()
console.log("-------------------------------------------")
// 5) Escreva um programa que inverta os caracteres de um string
console.log("Questão 5)")
inverteCaracteres("animal")
console.log("-------------------------------------------")

// ####################### Questão 2)
function fib(num){

    var fibonacci = []

    fibonacci[0] = 0
    fibonacci[1] = 1

    for(var i = 2; i < num; i++){

        fibonacci[i] = fibonacci[i -2] + fibonacci[i -1]

        if(fibonacci[i] === num){

            return console.log("O número informado pertence a sequência")
        }
    }

    return console.log("O número informado não pertence a sequência")
}
// ####################### Final - Questão 2)

// ####################### Questão 3.1)
function menorValorDeFaturamentoEmUmDiaDoMes(){

    let menorValor = dados[0].valor;

    for(i = 0; i < dados.length; i++){

        if(dados[i].valor < menorValor && dados[i].valor != 0.0){

            menorValor = dados[i].valor
        } 
    }

    return menorValor;
}
// ####################### Final - Questão 3.1)

// ####################### Questão 3.2)
function maiorValorDeFaturamentoEmUmDiaDoMes(){

    let maiorValor = dados[0].valor;

    for(i = 0; i < dados.length; i++){

        if(dados[i].valor > maiorValor){
            maiorValor = dados[i].valor

        } 
    }

    return maiorValor;
}
// ####################### Final - Questão 3.2)

// ####################### Questão 3.3)
function mediaMensal(){

    let ValorTotal = 0
    // let diasTrabalhados = 30

    for (let i = 0; i < dados.length; i++) {

        ValorTotal = ValorTotal + dados[i].valor
        
    }

    let mediaMensal = ValorTotal / 21     // 30 - 9, teve 9 dias sem trabalho

    return mediaMensal;
}

// # Questão 3.3)
function numeroDeDiasNoMesQueValorDeFaturamentoDiarioFoiSuperiorMediaMensal(){

    for (let i = 0; i < dados.length; i++) {
        
        if (dados[i].valor > mediaMensal()) {
            console.log("dia:" + dados[i].dia + " valor:" + dados[i].valor)
        }
    }
}
// ####################### Final - Questão 3.3)

// ####################### Questão 4)
// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53
function calculaPercentualDeRepresentação(){

    let dadosEst = [
        {
            "estado": "SP",
            "valor": 67.83643
        },
        {
            "estado": "RJ",
            "valor": 36.67866
        },
        {
            "estado": "MG",
            "valor": 29.22988
        },
        {
            "estado": "ES",
            "valor": 27.16548
        },
        {
            "estado": "Outros",
            "valor": 19.84953
        },
    ]
    
    let totalDinheiro = 0

    for (let i = 0; i < dadosEst.length; i++) {
        const total = dadosEst[i].valor;

        totalDinheiro = totalDinheiro + total
    }

    let sp = (dadosEst[0].valor / totalDinheiro) * 100
    console.log("São Paulo(SP) = %" + sp.toFixed(3))

    let rj = (dadosEst[1].valor / totalDinheiro) * 100
    console.log("Rio de Janeiro(RJ) = %" + rj.toFixed(3))

    let mg = (dadosEst[2].valor / totalDinheiro) * 100
    console.log("Minas Gerais(MG) = %" + mg.toFixed(3))

    let es = (dadosEst[3].valor / totalDinheiro) * 100
    console.log("Espirito Santo(ES) = %" + es.toFixed(3))

    let out = (dadosEst[4].valor / totalDinheiro) * 100
    console.log("Outros(outr) = %" + out.toFixed(3))
}
// ####################### Final - Questão 4)

// ####################### Questão 5)
function inverteCaracteres(name){
    let novoNome = ""

    for (let i = name.length - 1; i >= 0; i--) {

        novoNome = novoNome + name[i]
    }

    return console.log("O caracter: |" + name + "| invertido, fica => " + novoNome)
}
// ####################### Final - Questão 5)