const clientes = [
    {
    nome: 'Lucas',
    idade: '21',
    dependentes: [{ // transformando dependentes em um array
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
    },
    {
        nome: 'Samia Maria',
        parentesco: 'Filha',
        dataNasc: '04/01/2014'}]
    },
    {
        nome: 'Carlos',
        idade: '25',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'Filha',
            dataNasc: '30/08/2020'
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)