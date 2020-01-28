// criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.
// se a media for maior que 5, parabenizar a turma

const alunos = [{
    nome: 'Jorge',
    nota: 9.8
  },
  {
    nome: 'Laryssa',
    nota: 10
  },
  {
    nome: 'Luana',
    nota: 2
  }
]


const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

console.log(media)

const nomesDeAlunos = ['Jorge', 'Laryssa', 'Luana']

console.log(alunos)