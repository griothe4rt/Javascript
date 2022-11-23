// Criando objeto Cliente
const cliente = {
    nome: 'Lucas',
    idade: '21',
    cpf: '12345678910',
    email: 'lucas@email.com',
    fones: ['11993243387', '11993243385'] // podemos ter um array num objeto
}

cliente.fones.forEach(fone => console.log(fone)) // exibe os telefones do objeto Cliente