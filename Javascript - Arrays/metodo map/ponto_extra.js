const notas = [10, 9, 8, 7, 6]

// metodo MAP

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(`Notas atualizadas: ${notasAtualizadas}`)