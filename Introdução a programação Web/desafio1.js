// CALCULO DE IMC

const nome = 'Jorge'
const altura = 1.76
const peso = 115.4

const imc = peso / (altura * altura)


if (imc >= 30) {
  console.log(nome + ' você está acima do peso')
} else if (imc < 29.9) {
  console.log(nome + ' você não está acima do peso')
}


// CÁLCULO DE APOSENTADORIA

const nome = 'Jorge'
const sexo = 'M'
const idade = 60
const contribuicao = 35

const contribuicaoMin = idade + contribuicao

if (sexo === 'M' && contribuicaoMin >= 95 || sexo === 'M' && contribuicao >= 35) {
  if (!(sexo === 'F') && contribuicaoMin >= 85 || contribuicao >= 30) {
    console.log(nome + ', pode se aposentar!')
  }
} else {
  console.log(nome + ', ainda não pode se aposentar')
}