const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilhereme', 'Aline', 'Fabiana', 'André']

console.log("Quantidade de alunos:", nomes.length)

const sala1 = nomes.slice(0, nomes.length/2)

const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da Sala 1: ${sala1}`)

console.log(`Alunos da Sala 2: ${sala2}`)