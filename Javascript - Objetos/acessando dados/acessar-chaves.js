// Criando objeto Cliente
const cliente = {
    nome: 'Lucas',
    idade: '21',
    cpf: '12345678910',
    email: 'lucas@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'] // definindo a arrays e os dados

console.log(cliente[chaves[0]]) // usando colchetes para acessar os dados de outro lugar

// usando for each para acessar todos os dados da array

chaves.forEach(dados => console.log(cliente[dados]))