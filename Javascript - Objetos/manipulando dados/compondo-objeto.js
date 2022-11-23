// Criando objeto Cliente
const cliente = {
    nome: 'Lucas',
    idade: '21',
    cpf: '12345678910',
    email: 'lucas@email.com',
    fones: ['11993243387', '11993243385']
}

// adiciona um objeto dentro de um objeto

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'Filha',
    dataNasc: '20/03/2011'
}

console.log(cliente)

// alterando objeto dentro de objeto

cliente.dependentes.nome = 'Sara Silva'

cliente.dependentes.localNasc = 'São Paulo'

console.log(cliente)