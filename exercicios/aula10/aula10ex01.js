const professor = {
    nome: "Tony Stark",
    materia: "matematica",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

let notas = [0, 0]

for (const key in professor.notas) {
    notas[0] += professor.notas[key]
    notas[1] ++
}

const media = notas[0] / notas[1]



console.log(`A média das notas é ${media.toFixed(2)}`)

const aprovado =  media >= 3 ? 
    `O professor ${professor.nome} teve sua turma aprovada` : 
    `O professor ${professor.nome} teve sua sala reprovada`
console.log(aprovado)