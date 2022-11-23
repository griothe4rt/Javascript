// Criando objeto Cliente
const cliente = {
    nome: 'Lucas',
    idade: '21',
    cpf: '12345678910',
    email: 'lucas@email.com'
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`) // notação de ponto para acessar o objeto

// metodos para string em objetos

console.log(`CPF: ${cliente.cpf.substring(0,3)}.***.***-**`)