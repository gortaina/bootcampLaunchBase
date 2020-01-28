// criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.
// se a media for maior que 5, parabenizar a turma


const aluno1 = 'Jorge'
const notaAluno1 = 9.8

const aluno2 = 'Laryssa'
const notaAluno2 = 10

const aluno3 = 'Luana'
const notaAluno3 = 2

// const nome3 = `Luana e ${nome}` //template string

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3


if (media > 5) {
  // faz alguma coisa
  console.log(`A nota foi de ${media}. Parabéns!`)
} else {
  // faz outra coisa
  console.log('A média é menor que 5')
}