const alunos = ['Lucas', 'João', 'Juliana', 'Caio', 'Ana']

const mediaAlunos = [8, 10, 7, 9, 6]

let listaNotas_Alunos = [alunos, mediaAlunos]


// includes sempre retorna um booleano
// indexOf retorna o número do indice onde o valor se encontra na Array

const exibeNomeNota = (nomeDoAluno) => {
    if (listaNotas_Alunos[0].includes(nomeDoAluno)){
        let indice = listaNotas_Alunos[0].indexOf(nomeDoAluno)
        return listaNotas_Alunos[0][indice] + ', sua média é ' + listaNotas_Alunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota('Lucas'))