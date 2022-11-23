// Criando objeto Cliente
const cliente = {
    nome: 'Lucas',
    idade: '21',
    cpf: '12345678910',
    email: 'lucas@email.com'
}

cliente.telefone = '1199254-8878' // adiciona chave telefone ao objeto cliente

const chaves = ['nome', 'idade', 'cpf', 'email', 'telefone']

chaves.forEach(dados => console.log(cliente[dados]))