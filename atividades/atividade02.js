import PromptSync from "prompt-sync";
import { format } from "./utils/formatPrice.js";
import { plusOrMinus } from "./utils/plusOrMinus.js";
import { getRandomNumber } from "./utils/getRandomNumber.js";
import { getRandomMatriz } from "./utils/getRandomMatriz.js";
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

	for (let i = 0; i < 9; i++) {
		pa.push(pa[pa.length - 1] + razao)
	}

	const somaPa = pa.reduce((prev, current) => prev + current, 0)
	console.log({
		"10 primeiros elementos": pa,
		"Somas entre valores": somaPa
	})
}

// exercicio11();


function exericicio12() {
	const fibonacci = [1, 1]
	for (let i = 0; i < 8; i++) {
		fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
	}
	console.log(fibonacci)
}

// exericicio12();


function exercicio13() {
	const fibonacci = [1, 1]
	for (let i = 0; i < 13; i++) {
		fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
	}
	console.log(fibonacci)
}

// exercicio13();


function exericio14() {
	const nomes = []
	for (let i = 0; i < 7; i++) {
		nomes.push(Prompt(`Digite um nome: `))
	}
	console.log(nomes.reverse())
}

// exericio14();


function exercicio15() {
	const vetor = []

	for (let i = 0; i < 10; i++) {
		vetor.push(Math.round(Number(Prompt(`Digite um número: `))))
	}

	vetor.forEach((v, i) => v % 2 === 0 ? console.log(`Número ${v}, index: ${i}`) : null)
}

// exercicio15();


function exercicio16() {
	const rng = []

	for (let i = 0; i < 20; i++) {
		rng.push(Math.floor(Math.random() * 100))
	}
	console.log(rng)
	console.log(rng.sort((a, b) => a - b))
}

// exercicio16();


function exercicio17() {
	const nomes = []
	const idades = []

	for (let i = 0; i < 9; i++) {
		nomes.push(Prompt(`Digite o nome: `))
		idades.push(Number(Prompt(`Digite a idade: `)))
	}

	const menores = []
	idades.forEach((idade, i) => {
		if (idade < 18) {
			menores.push({ nome: nomes[i], idade })
		}
	})

	console.log(menores)
}

// exercicio17();


function exercicio18() {
	const funcionario = {
		nome: '',
		cargo: '',
		salario: ''
	}
	funcionario.nome = Prompt(`Digite o nome do funcionario: `)
	funcionario.cargo = Prompt(`Digite o cargo do funcionario: `)
	funcionario.salario = format(Number(Prompt(`Digite o salario do funcionario: `)))

	console.log(funcionario)
}

// exercicio18();


function exercicio19() {
	const horarios = []

	for (let i = 0; i < 5; i++) {
		const hora = Number(Prompt(`Digite a hora: `))
		const minutos = Number(Prompt(`Digite os minutos: `))
		const segundos = Number(Prompt(`Digite os segundos: `))

		horarios.push(`${hora}:${minutos}:${segundos}`)
	}

	console.log(horarios)
}

// exercicio19();


function exercicio20() {
	const pagamento = {
		matricula: 0,
		nome: '',
		salarioBruto: 0,
	}

	pagamento.matricula = Number(Prompt(`Digite a matricula do funcionario: `))
	pagamento.nome = Prompt(`Digite o nome do functionario: `)
	pagamento.salarioBruto = Number(Prompt(`Digite o salario bruto do funcionario: `))

	pagamento.INSS = pagamento.salarioBruto * 0.12
	pagamento.salarioLiquido = pagamento.salarioBruto - pagamento.INSS

	console.log(pagamento)
}

// exercicio20();


function exercicio21() {
	const sexo = Prompt('Digite seu sexo: [m | f]')
	const alt = Number(Prompt('Digite sua altura: [ex: 1.75]'))
	if (sexo === 'm') {
		console.log(((72.7 * alt) - 58).toFixed(2))
	} else if (sexo === 'f') {
		console.log(((62.1 * alt) - 44.7).toFixed(2))
	}
}

// exercicio21('m', 1.75)


function exercicio22() {
	let salarios = [];
	let numeroFilhos = [];

	while (true) {
		const salarioAtual = Number(Prompt('Qual é o seu salário?'))
		if (salarioAtual < 0) {
			break
		}
		const filhosAtual = Number(Prompt('Quantos filhos você tem?'))
		if (filhosAtual < 0) {
			break
		}
		salarios.push(salarioAtual)
		numeroFilhos.push(filhosAtual)
	}

	const mediaSalario = salarios.reduce((a, b) => a + b, 0) / salarios.length;
	console.log(`Média salarios: ${mediaSalario}`)

	const mediaFilhos = numeroFilhos.reduce((a, b) => a + b, 0) / numeroFilhos.length;
	console.log(`Média filhos: ${mediaFilhos}`)

	const maiorSalario = salarios.reduce((a, b) => b > a ? b : a, 0);
	console.log(`Maior salario: ${maiorSalario}`)

	const pessoas350 = ((salarios.filter(salario => salario <= 350).length - 1) / (salarios.length - 1)) * 100

	console.log(`Percentual de pessoas com salario até R$350: ${pessoas350}%`)
}

// exercicio22()


function exercicio23() {
	const matriz = []

	for (let i = 0; i < 7; i++) {
		matriz[i] = []
		for (let j = 0; j < 7; j++) {
			matriz[i][j] = 0
		}
		matriz[i][i] = 1
	}

	console.table(matriz)
}

// exercicio23()


function exercicio24() {
	const matriz = []

	for (let i = 0; i < 6; i++) {
		matriz[i] = []

		for (let j = 0; j < 8; j++) {
			matriz[i][j] = plusOrMinus()
		}
	}

	console.table(matriz)

	const matrizPlus = matriz.map(linhaValue => {
		let i = 0
		linhaValue.forEach(colunaValue => {
			if (colunaValue < 0)
				i++
		})

		return i
	})

	console.table(matrizPlus)

}

// exercicio24()


function exercicio25() {
	const matriz = []

	for (let i = 0; i < 15; i++) {
		matriz[i] = []
		for (let j = 0; j < 20; j++) {
			matriz[i][j] = getRandomNumber(50)
		}
	}

	const somaColuna = Array(20).fill(0);

	for (let i = 0; i < 15; i++) {
		for (let j = 0; j < 20; j++) {
			somaColuna[j] += matriz[i][j]
		}
	}

	console.table(matriz)
	console.table(somaColuna)
}

// exercicio25()


function exercicio26() {
	const matrizA = []
	const matrizB = []
	const matrizP = []

	for (let i = 0; i < 3; i++) {
		matrizA[i] = []
		matrizB[i] = []
		matrizP[i] = []

		for (let j = 0; j < 5; j++) {
			matrizA[i][j] = getRandomNumber(10)
			matrizB[i][j] = getRandomNumber(10)
			matrizP[i][j] = matrizA[i][j] * matrizB[i][j]
		}
	}

	console.log('Matriz A')
	console.table(matrizA)
	console.log('Matriz B')
	console.table(matrizB)
	console.log('Matriz P')
	console.table(matrizP)
}

// exercicio26()


function exercicio27() {
	const matriz = []
	const multiplicador = 5
	const vetor = []

	for (let i = 0; i < 6; i++) {
		matriz[i] = []
		for (let j = 0; j < 6; j++) {
			matriz[i][j] = getRandomNumber(10)
			vetor.push(matriz[i][j] * multiplicador)
		}
	}

	console.table(matriz)
	console.log(vetor)
}

// exercicio27()


function exercicio28() {
	const matriz = []
	let somaA = 0
	let somaB = 0

	for (let i = 0; i < 10; i++) {
		matriz[i] = []
		for (let j = 0; j < 10; j++) {
			matriz[i][j] = getRandomNumber(10)

			if (j > i) {
				somaA += matriz[i][j]
			}
			if (i > j) {
				somaB += matriz[i][j]
			}
		}
	}

	console.table(matriz)
	// console.log(somaA)
	// console.log(somaB)
}

// exercicio28()


function exercicio29() {
	const matriz = getRandomMatriz({ x: 5, y: 5, maxRandomNumber: 10 })
	let somaLinha4 = 0
	let somaColuna2 = 0
	let somaDiagonal = 0
	let somaTotal = 0

	console.table(matriz.value)
	for (let i = 0; i < matriz.y; i++) {
		if (i === 3) {
			somaLinha4 = matriz.value[i].reduce((a, b) => a + b, 0)
		}
		for (let j = 0; j < matriz.x; j++) {
			if (j === 1) {
				somaColuna2 += matriz.value[i][j]
			}
			if (i === j) {
				somaDiagonal += matriz.value[i][j]
			}
			somaTotal += matriz.value[i][j]
		}
	}
	console.log({
		somaLinha4,
		somaColuna2,
		somaDiagonal,
		somaTotal
	})
}

// exercicio29()


function exericicio30() {
	const matriz = getRandomMatriz({ x: 5, y: 5, maxRandomNumber: 10 })

	let vetorSL = []
	let vetorSC = Array(5).fill(0)

	for (let i = 0; i < matriz.x; i++) {
		vetorSL[i] = matriz.value[i].reduce((a, b) => a + b, 0)
		for (let j = 0; j < matriz.y; j++) {
			vetorSC[j] += matriz.value[i][j]
		}
	}
	console.log({
		matriz: matriz.value,
		vetorSL,
		vetorSC
	})
}

// exericicio30()


function exercicio31() {
	const matriz = getRandomMatriz({ x: 5, y: 5, maxRandomNumber: 10 })
	const valorA = getRandomNumber(10)
	let contador = 0
	const matrizX = []

	for (let i = 0; i < matriz.x; i++) {
		for (let j = 0; j < matriz.y; j++) {
			if (matriz.value[i][j] === valorA) {
				contador++
			} else {
				matrizX.push(matriz.value[i][j])
			}
		}
	}

	console.log({
		matriz: matriz.value,
		valorA,
		contador,
		matrizX
	})
}

// exercicio31()


function exercicio32() {
	const matriz = getRandomMatriz({ x: 12, y: 13, maxRandomNumber: 100 })
	const matrizA = []
	
	for (let i = 0; i < matriz.x; i++) {
		
		const divisor = matriz.value[i].reduce((a, b) => b > a ? b : a, 0)
		
		matrizA[i] = matriz.value[i].map((value) => {
			return Number((value / divisor).toFixed(2))
		})
	}
	console.table(matriz.value)
	console.table(matrizA)
}

exercicio32()