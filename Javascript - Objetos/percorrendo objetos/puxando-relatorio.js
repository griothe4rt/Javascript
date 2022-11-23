// Criando objeto Cliente
const cliente = {
    nome: 'Lucas',
    idade: '21',
    cpf: '12345678910',
    email: 'lucas@email.com',
    fones: ['11993243387', '11993243385'],
    dependentes: [{ // transformando dependentes em um array
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
    },
    {
        nome: 'Samia Maria',
        parentesco: 'Filha',
        dataNasc: '04/01/2014'}],
    saldo: 100,
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] === 'object' || typeof cliente [info] === 'function')
    {
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}`
    }
}

console.log(relatorio)