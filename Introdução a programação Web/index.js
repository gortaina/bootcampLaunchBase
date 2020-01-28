// criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.
// se a media for maior que 5, parabenizar a turma

const aluno01 = {
  nome: 'Jorge',
  nota: 9.8
}

const aluno02 = {
  nome: 'Laryssa',
  nota: 10

}
const aluno03 = {
  nome: 'Lauana',
  nota: 2
}


const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log(aluno01)


if (media > 5) {
  // faz alguma coisa
  console.log(`A nota foi de ${media}. Parabéns!`)
} else {
  // faz outra coisa
  console.log('A média é menor que 5')
}