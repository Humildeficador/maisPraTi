import PromptSync from "prompt-sync";
import { format } from "./utils/formatPrice.js";
const Prompt = PromptSync();

function exercicio01() {
    console.log(`\nExercicio 01`)
    const cigarrosPorDia = Number(Prompt(`Digite a quantidade de cigarros fumados por dia: `))
    const anosFumados = Number(Prompt(`Digite a quantos anos você fuma: `)) * 365

    const tempoDeVidaDias = Math.floor((((cigarrosPorDia * 10) / 60) * anosFumados) / 24)

    console.log(`${tempoDeVidaDias} dias`)
}

// exercicio01();


function exercicio02() {
    console.log(`\nExercicio 02`)
    const velocidadeCarro = Number(Prompt(`Digite a velocidade do carro: `))
    if (velocidadeCarro > 80) {
        const velocidadeAcima = velocidadeCarro - 80
        const valorMulta = velocidadeAcima * 5
        const valorMultaFormatado = format(valorMulta)
        console.log(`Você foi multado, valor da multa: ${valorMultaFormatado}`)
    } else {
        console.log(`Velocidade abaixo do limite. Dirija com segurança!`)
    }
}

// exercicio02();


function exercicio03() {
    console.log(`\nExercicio 03`)
    const distancia = Number(Prompt(`Digite a distancia que deseja percorrer em KM: `))
    if (distancia > 200) {
        const valorDaPassagem = distancia * 0.45
        const valorDaPassagemFormatado = format(valorDaPassagem)
        console.log(`Valor da passagem: ${valorDaPassagemFormatado}`)
    } else {
        const valorDaPassagem = distancia * 0.5
        const valorDaPassagemFormatado = format(valorDaPassagem)
        console.log(`Valor da passagem: ${valorDaPassagemFormatado}`)
    }
}

// exercicio03();


function exercicio04() {
    console.log(`\nExercicio 04`)
    const ladoA = Number(Prompt(`Digite o comprimento do Lado A: `))
    const ladoB = Number(Prompt(`Digite o comprimento do Lado B: `))
    const ladoC = Number(Prompt(`Digite o comprimento do Lado C: `))

    if (ladoA < ladoB + ladoC &&
        ladoB < ladoA + ladoC &&
        ladoC < ladoA + ladoB
    ) {
        console.log(`É possivel montar um triangulo`)
    }
}

// exercicio04();


function exercicio05() {
    console.log(`\nExericio 05\nJogadas possíveis: pedra | papel | tesoura`)
    const primeiraJogada = Prompt(`Digite a primeira jogada: `)
        .toLocaleLowerCase();

    const segundaJogada = Prompt(`Digite a segunda jogada: `)
        .toLocaleLowerCase();

    if (primeiraJogada === segundaJogada) {
        console.log(`Empate!`)
    } else if (
        (primeiraJogada === 'pedra' || segundaJogada === 'pedra')
        && (primeiraJogada === 'papel' || segundaJogada === 'papel')
    ) {
        console.log(`Papel venceu!`)
    } else if (
        (primeiraJogada === 'pedra' || segundaJogada === 'pedra')
        && (primeiraJogada === 'tesoura' || segundaJogada === 'tesoura')
    ) {
        console.log(`Pedra venceu!`)
    } else if (
        (primeiraJogada === 'tesoura' || segundaJogada === 'tesoura')
        && (primeiraJogada === 'papel' || segundaJogada === 'papel')
    ) {
        console.log('Tesoura venceu!')
    } else {
        console.log(`Jogada inválida`)
    }
}

// exercicio05();


function exercicio06() {
    console.log(`\nExercicio 06`)
    const rng = Math.floor(Math.random() * (6 - 1) + 1)
    const tentativa = Number(Prompt(`Digite um número de 1 à 5 para tentar acertar o número gerado: `))

    if (tentativa === rng) {
        console.log('Você acertou o número!')
    } else {
        console.log('Você errou o número!')
    }
}

// exercicio06();


function exercicio07() {
    console.log(`\nExercicio 07`)
    const tipoCarro = Prompt(`Digite o tipo de carro (popular | luxo) : `)
    const diasAlugado = Number(Prompt(`Digite por quantos dias o carro foi alugado: `))
    const kmRodados = Number(Prompt(`Digite quantos Km foram percorridos: `))

    switch (tipoCarro) {
        case 'popular': {
            const valorDias = 90 * diasAlugado;
            let valorKm = 0

            if (kmRodados <= 200) {
                valorKm = kmRodados * 0.20
            } else {
                valorKm = kmRodados * 0.10
            }
            const valorTotal = valorDias + valorKm;
            console.log(`
                Carro do tipo: ${tipoCarro}.\nDias alugados: ${diasAlugado}.\nValor total Km: ${format(valorKm)}.\nValor total: ${format(valorTotal)}.
            `)

            break;
        }

        case 'luxo': {
            const valorDias = 150 * diasAlugado;
            let valorKm = 0

            if (kmRodados <= 100) {
                valorKm = kmRodados * 0.30
            } else {
                valorKm = kmRodados * 0.25
            }
            const valorTotal = valorDias + valorKm;
            console.log(`
                Carro do tipo: ${tipoCarro}.\nDias alugados: ${diasAlugado}.\nValor total Km: ${format(valorKm)}.\nValor total: ${format(valorTotal)}.
            `)

            break;
        }

        default: {
            break;
        }
    }
}

// exercicio07();


function exercicio08() {
    const horasNoMes = Number(Prompt(`Digite quantas horas teve de atividade no mês: `))
    let totalPontos = 0;

    if (horasNoMes <= 10) {
        totalPontos = horasNoMes * 2
    } else if (horasNoMes <= 20) {
        totalPontos = horasNoMes * 5
    } else {
        totalPontos = horasNoMes * 10
    }
    const valorTotal = totalPontos * 0.05
    console.log(`Total de pontos ganhos no mês: ${totalPontos}.\n Valor ganho: ${format(valorTotal)}`)
}

// exercicio08();


function exercicio09() {
    const valoresHomens = []
    const valoresMulheres = []

    do {
        const valor = Number(Prompt(`Digite o valor pago: `))
        const sexo = Prompt(`Digite o sexo Masculino(m) | Feminino(f): `)

        if (sexo === 'm') {
            valoresHomens.push(valor)
        } else {
            valoresMulheres.push(valor)
        }

        const verificacao = Prompt(`\nDeseja continuar? Simm(s) | Não(n)`)

        if (verificacao === 'n') {
            break
        }
    } while (true)

    const totalHomens = valoresHomens.reduce((prev, current) => { return prev + current }, 0)
    const totalMulheres = valoresMulheres.reduce((prev, current) => { return prev + current }, 0)

    console.log({
        'Total pago à homens': totalHomens,
        'Total pago à mulheres': totalMulheres
    })
}

// exercicio09();


function exercicio10() {
    const valores = []
    do {
        const numero = Number(Prompt(`Digite um valor: `))
        valores.push(numero)
        const verificacao = Prompt(`Deseja continuar? Sim(s) | Não(n)`).toLocaleLowerCase()

        if (verificacao === 'n') {
            break;
        }

    } while (true)

    const menorValor = valores.reduce((a, b) => b < a ? b : a, valores[0])
    const valoresPares = valores.filter(v => v % 2 === 0 ? v : null)
    const totalValores = valores.reduce((prev, current) => prev + current, 0)
    const mediaValores = totalValores / valores.length

    console.log({
        "Soma de todos valores": totalValores,
        "Menor valor": menorValor,
        "Média dos valores": mediaValores,
        "Quantidade de pares": valoresPares.length
    })
}

// exercicio10();


function exercicio11() {
    const valor = Number(Prompt(`Digite o primeiro valor da PA: `))
    const razao = Number(Prompt(`Digite a razao da PA: `))
    const pa = [valor]

    for(let i = 0; i < 9; i++) {
        pa.push(pa[pa.length-1] + razao)
    }

    const somaPa = pa.reduce((prev, current) => prev + current, 0)
    console.log({
        "10 primeiros elementos": pa,
        "Somas entre valores": somaPa
    })
}

exercicio11();