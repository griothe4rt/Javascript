// criando objeto genérico de Cliente
function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca)
{
    //chamando propriedades do objeto Cliente pra ClientePoupanca
    Cliente.call(this,nome,cpf,email,saldo) 
    this.saldoPoupanca = saldoPoupanca
}

// criando cliente de poupança
const juliana = new ClientePoupanca('Juliana','12345678910','juliana@email.com', 100, 200)

console.log(juliana)

// criando metodo de depositar em poupança
ClientePoupanca.prototype.depositarPoupanca = function(valor){
    this.saldoPoupanca += valor
}

// chamando metodo de depositar valor em poupança
juliana.depositarPoupanca(30)

console.log(juliana.saldoPoupanca)