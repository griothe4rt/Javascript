const livros = require('./listaLivros'); // importando a precosLivros

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;
    // define variavel inicial pro for | enquanto o valor atual for menor que a array de livros
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual ++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
        maisBarato = atual
    }
}
    return maisBarato;
}

let maisBarato = 0;

let maisCaro = 0;

// define variavel inicial pro for | enquanto o valor atual for menor que a array de livros
for(let atual = 0; atual < livros.length; atual ++) {
    if (livros[atual].preco > livros[maisCaro].preco) {
        maisCaro = atual
    }
}

console.log(`O livro mais barato custa ${livros[maisBarato].preco} reais e o título é ${livros[maisBarato].titulo}`)

console.log(`O livro mais caro custa ${livros[maisCaro].preco} reais e o título é ${livros[maisCaro].titulo}`)

module.exports = menorValor;