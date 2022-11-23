// Criando objeto Cliente
const cliente = {
    nome: 'Lucas',
    idade: '21',
    cpf: '12345678910',
    email: 'lucas@email.com',
    fones: ['11993243387', '11993243385'],
    dependentes: [{ // transformando dependentes em um array
        nome: 'Sara',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
    }]
}


// adicionando novo dependente no final do array de dependentes
cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'Filha',
    dataNasc: '04/01/2014'
})

console.log(cliente)

// filtrando a lista por data de nascimento

const filhaMaisNova = cliente.dependentes.filter(dependente => 
    dependente.dataNasc==='04/01/2014')

console.log(filhaMaisNova[0].nome)