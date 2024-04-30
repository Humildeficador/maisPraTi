import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log(`\nExercicío 01 - converter graus em fahrenheit`)

function celsiusParaFahrenheit(grausCelcius) {
    const grausFahrenheit = (grausCelcius * 1.8) + 32;
    console.log(`${grausFahrenheit.toFixed(2)}°F`);
    return
}

const temperaturaCelsius = parseFloat(prompt('Digite a temperatura (em celsius) que você deseja converter para fahrenheit:'));

celsiusParaFahrenheit(temperaturaCelsius);



console.log(`\nExericicio 02 - eleitores`)

function porcentagemEleitores(eleitores, brancos, nulos, validos) {
    const porcentagem = parseInt(eleitores) / 100;
    const porcentagemBranco = parseInt(brancos) / porcentagem;
    const porcentagemNulos = parseInt(nulos) / porcentagem;
    const porcentagemValidos = parseInt(validos) / porcentagem;

    console.log({
        "Percentual de votos brancos": `${porcentagemBranco.toFixed(2)}%`,
        "Percentual de votos nulos": `${porcentagemNulos.toFixed(2)}%`,
        "percentual de votos validos": `${porcentagemValidos.toFixed(2)}%`
    });

    return
}

const eleitores = prompt('Digite o total de eleitores:');
const brancos = prompt('Digite o total de votos brancos:');
const nulos = prompt('Digite o total de votos nulos:');
const validos = prompt('Digite o total de votos validos:');

porcentagemEleitores(eleitores, brancos, nulos, validos);



console.log(`\nExercicio 3 - quatro inteiros`)

function quatroInteiros(numero1, numero2, numero3, numero4) {
    const numero1Alterado = numero1 + 25;
    const numero2Alterado = numero2 * 3;
    const numero3Alterado = numero3 * 0.12;
    const numero4Alterado = numero1 + numero2 + numero3;

    console.log(`\nPrimeiro número: ${numero1Alterado}`);
    console.log(`Segundo número: ${numero2Alterado}`);
    console.log(`Terceiro número: ${numero3Alterado}`);
    console.log(`Quarto número: ${numero4Alterado}`);

    return
}

const numero1 = parseInt(prompt('Digite o primeiro número:'))
const numero2 = parseInt(prompt('Digite o segundo número:'))
const numero3 = parseInt(prompt('Digite o terceiro número:'))
const numero4 = parseInt(prompt('Digite o quarto número:'))

quatroInteiros(numero1, numero2, numero3, numero4);



console.log(`\nExercicio 4 & 5 - média semestral`)

function calculaMedia(nota1, nota2) {
    const mediaSemestral = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    const notaMinima = 6.0;

    if (mediaSemestral >= notaMinima) {
        console.log('\nPARABÉNS! Você foi aprovado.')
    } else {
        console.log('\nVocê foi REPROVADO! Estude mais.')
    }
}

const nota1 = prompt('Digite a nota da primeira avaliação:');
const nota2 = prompt('Digite a nota da segunda avaliação:');

calculaMedia(nota1, nota2);



console.log(`\nExercicio 6 - triangulo`)

function triangulo(ladoA, ladoB, ladoC) {
    const ladoA_Parse = parseFloat(ladoA);
    const ladoB_Parse = parseFloat(ladoB);
    const ladoC_Parse = parseFloat(ladoC);


    const verificacaoTriangulo =
        ladoA_Parse < ladoB_Parse + ladoC_Parse &&
        ladoB_Parse < ladoA_Parse + ladoC_Parse &&
        ladoC_Parse < ladoA_Parse + ladoB_Parse;

    if (verificacaoTriangulo === false) {
        console.log('Não é possível formar um triangulo.');
        return
    }

    if (ladoA_Parse === ladoB_Parse && ladoB_Parse === ladoC_Parse) {
        console.log('\nTriângulo eqüilátero');
        return
    }
    else if (ladoA_Parse === ladoB_Parse || ladoA_Parse === ladoC_Parse || ladoB_Parse === ladoC_Parse) {
        console.log('\nTriângulo isósceles');
        return
    }
    else {
        console.log('\nTriângulo escaleno');
        return
    }
}

const ladoA = prompt('Digite o primeiro lado do triângulo: ');
const ladoB = prompt('Digite o segundo lado do triângulo: ');
const ladoC = prompt('Digite o terceiro lado do triângulo: ');

triangulo(ladoA, ladoB, ladoC);



console.log(`\nExercicio 7 - maçãs`)

function custoMacas(quantidadeMacas) {
    let custoTotal ;
    if(quantidadeMacas < 12) {
        custoTotal = 0.30 * quantidadeMacas;
        console.log(`\nValor total: R$ ${custoTotal.toFixed(2)}`);
        return
    } else {
        custoTotal = 0.25 * quantidadeMacas;
        console.log(`\nValor total: R$ ${custoTotal.toFixed(2)}`);
        return
    }
}

const quantidadeMacas = parseInt(prompt('Digite a quantidade da maçãs compradas: '))

custoMacas(quantidadeMacas);



console.log(`\nExercicio 8 - Organizar valores`)

function organizarValores(valor1, valor2) {
    if (valor1 === valor2) {
        console.log('Digite valores diferentes!');
        return
    }

    if (valor1 < valor2) {
        console.log(`\n${valor1}, ${valor2}`);
        return
    } else {
        console.log(`\n${valor2}, ${valor1}`);
        return
    }
}

const valor1 = parseFloat(prompt('Digite o primeiro valor: '));
const valor2 = parseFloat(prompt('Digite o segundo valor: '));

organizarValores(valor1, valor2);



console.log(`\nExercicio 9 - código de origem`)

function codigoOrigem(codigo) {
    switch (codigo) {
        case 1: {
            console.log('\nSul.');
            return
        }
        case 2: {
            console.log('\nNorte.');
            return
        }
        case 3: {
            console.log('\nLeste.');
            return
        }
        case 4: {
            console.log('\nOeste.');
            return
        }
    }

    if (codigo === 5 || codigo === 6) {
        console.log('\nNordeste.');
        return
    }
    else if (codigo >= 7 && codigo <= 9) {
        console.log('\nSudeste.');
        return
    }
    else if (codigo >= 10 && codigo <= 20) {
        console.log('\nCentro-Oeste.');
        return
    } else if (codigo >= 25 && codigo <= 50) {
        console.log('\nNordeste.');
        return
    }
    else {
        console.log('\nProduto importado.');
        return
    }
}

const codigo = parseInt(prompt('Digite o código do produto: '));

codigoOrigem(codigo);



console.log(`\nExercicio 10 - Escrever na tela 10 vezes`)

function escrever10Vezes(numero) {
    for (let i = 0; i < 10; i++) {
        console.log(`${numero}`);
    }
}

const numero = parseInt(prompt('Escreva um número para ser escrito na tela 10x:'));
escrever10Vezes(numero);



console.log(`\nExercicio 11 - par ou impar`)

function parOuImpar() {
    let verificacao = 0;

    while (verificacao >= 0 && verificacao != null) {
        verificacao = parseInt(prompt('Digite um número para verificar se é impar ou par:'));

        if (verificacao % 2 === 0 && verificacao >= 0) {
            console.log('\nO número é par.');
        } else if (verificacao % 2 != 0 && verificacao >= 0) {
            console.log('\nO número é impar.');
        }
    }
}

parOuImpar();



console.log(`\nExercicio 12 - 1000 - 1999`)

function sobraCinco() {
    for (let i = 1000; i <= 1999; i++) {
        i % 11 === 5 ? console.log(i) : null
    }
    return
}

sobraCinco()



/* Exercicio 13 - Tabuada */

/* function tabuada(multiplicandos, multiplicadorMax) {

    for (const multiplicando of multiplicandos) {
        console.log('\n')
        for (let i = 1; i <= multiplicadorMax; i++) {
            console.log(`${multiplicando} x ${i} = ${multiplicando * i}`)
        }
    }
}

tabuada([1, 2, 3, 4, 5], 10) */



console.log(`\nExercicio 13 c/ prompt - Tabuada`)

function tabuada() {
    const multiplicandos = []
    let multiplicadorMax = 0
    for (let i = 1; i <= 6; i++) {
        if (i <= 5) {
            multiplicandos.push(Number(prompt(`Digite o ${i}º número: `)))
        } else {
            multiplicadorMax = Number(prompt('Digite o multiplicador máximo: '))
        }
    }

    for (const multiplicando of multiplicandos) {
        console.log(``)
        for(let j = 1; j <= multiplicadorMax; j++) {
            console.log(`${multiplicando} x ${j} = ${multiplicando * j}`)
        }
    }    
}

tabuada()



console.log(`\nExercicio 14 - Média aritmética`)

function media () {
    const numeros = []
    let numeroEntrada;

    while(true) {
        numeroEntrada = Number(prompt('Digite os números para calcular a média: '))

        if(numeroEntrada !== 0) {
            numeros.push(numeroEntrada)
        } else {
            break
        }
    }
    console.log((numeros.reduce((a, b) => a + b, 0) / numeros.length).toFixed(2))
}

media()



console.log(`\nExercicio 15 - Média ponderada`)

function mediaPonderada() {
    console.log(`Ao digitar 0 você encerrará o programa.`)
    let produtos = 0;
    let pesos = 0

    while (true) {
        const entradaNumero = Number(prompt(`Digite o número: `))
        if(entradaNumero === 0)
            break
        
        const entradaPeso = Number(prompt(`Digite o peso: `))
        if(entradaPeso === 0)
            break

        const produto = entradaNumero * entradaPeso;
        produtos += produto
        pesos += entradaPeso
    }
    const media = produtos/pesos
    console.log(`Média ponderada: ${media}`)
}

mediaPonderada()



console.log(`\nExercicio 16 - Números primmos > 100`)

function numerosPrimos() {
    let contagem = 1;
    let numero = 101;

    while (contagem <= 50) {
        let primo = true
        for (let i = 2; i < numero; i++) {
            if(numero % i === 0) {
                primo = false
                break
            }
        }

        if(primo) {
            console.log(`${contagem}: ${numero}`)
            contagem ++
        } 
        
        numero ++
    }
}

numerosPrimos()