// criando uma classe Cliente
class Cliente{
    // obrigatorio ter o constructor
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo
    }

    // criando metodo de deposito
    depositar(valor){
        this.saldo += valor
    }

    // criando metodo de exibir o saldo
    exibirSaldo(){
        console.log(this.saldo)
    }
}

// criando ClientePoupanca extendendo a classe Cliente
class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo) // definindo propriedades que precisam ter no objeto
        this.saldoPoupanca = saldoPoupanca
    }

    // criando depósito na poupança
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

// criando novo Cliente de Poupança
const lucas = new ClientePoupanca('Lucas', 'lucas@email.com', '12345678910', 100, 200)

console.log(lucas)

lucas.depositar(50)
lucas.depositarPoupanca(50)

console.log(lucas)