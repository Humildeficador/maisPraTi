const filmes = [
    { titulo: "Tropa de Elite", genero: "Acao" },
    { titulo: "Capitão Fantástico", genero: "Drama" },
    { titulo: "O Poderoso Chefão", genero: "Crime" },
    { titulo: "Clube da Luta", genero: "Drama" },
    { titulo: "Oppenheimer", genero: "Biografia" },
    { titulo: "High School Musical", genero: "Musical" },
    { titulo: "Barbie", genero: "Comedia" },
]

let contagemGeneros = {}

filmes.forEach(filme => {
    if(contagemGeneros[filme.genero]) {
        contagemGeneros[filme.genero]++
    } else {
        contagemGeneros[filme.genero] = 1
    }
});

for (const genero in contagemGeneros) {
    console.log(`${contagemGeneros[genero]} filme(s) do gênero ${genero}`)
}