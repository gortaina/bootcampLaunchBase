// criar um programa que calcula a média
// das turmas de alunos  e envia
// mensagem do cálculo da média.
// se a media for maior que 5, parabenizar a turma

const alunosDaTurmaA = [
  {
    nome: "Jorge",
    nota: 0
  },
  {
    nome: "Laryssa",
    nota: 10
  },
  {
    nome: "Luana",
    nota: 2
  }
];

const alunosDaTurmaB = [
  {
    nome: "Priscila",
    nota: 8.9
  },
  {
    nome: "Rebeka",
    nota: 10
  },
  {
    nome: "Varoa",
    nota: 6
  },
  {
    nome: "Mulher guerreira",
    nota: 5
  }
];

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }

  const media = soma / alunos.length;
  console.log(media);
}

const media1 = calculaMedia(alunosDaTurmaA);
// const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A media da turma ${turma} foi de ${media}. Parabéns`);
  } else {
    console.log(`A média da turma ${turma} é menor que 5`);
  }
}

// enviaMensagem(media1, 'turmaA')
// enviaMensagem(media2, 'turmaB')
