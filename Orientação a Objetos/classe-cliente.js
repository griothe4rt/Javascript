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

// criando objeto Lucas
const lucas = new Cliente('Lucas', 'lucas@email.com', '12345678910', 100)

console.log(lucas)

// exibindo saldo
lucas.exibirSaldo()