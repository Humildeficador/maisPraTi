let livros = [
    {
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        ano: 1605
    },
    {
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        ano: 1813
    },
    {
        titulo: "Cem Anos de Solidão",
        autor: "Gabriel García Márquez",
        ano: 1967
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        ano: 1949
    },
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        ano: 1997
    }
];

for (const livro of livros) {
    if (livro.ano < 2000) {
        console.log(`O livro ${livro.titulo}, escrito por ${livro.autor}, foi publicado em ${livro.ano}`)
    }
}