const livros = require('./listaLivros');  // importando a precosLivros

const menorValor = require('./ordenando-livros');

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)
    
    let livroAtual = livros[atual]; //guardando posição dos livros atual pra fazer troca

    let livroMenorPreco = livros[menor]; // guardando posição do livro mais barato

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual //trocando de posições
}

console.log(livros)