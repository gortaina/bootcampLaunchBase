// criar um objeto que armazene os dados da Rocketseat
// imprima em tela a mensagem: A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

// CONSTRUÇÃO E IMPRESSÃO DE OBJETOS
const bootcamp = {
  nome: 'Rocketseat',
  cor: 'Roxo',
  foco: 'Programação',
  endereço: {
    rua: 'Rua Guilherme Gembala',
    numero: 260
  }
}

console.log(`A empresa ${bootcamp.nome} está localizada em ${bootcamp.endereço.rua}, ${bootcamp.endereço.numero}`)




// criar um array de um programa com nome, idade e tecnologias (podem ser várias)
// VETORES E OBJETOS
const programador = {
  nome: 'Jorge',
  idade: 25,
}

const tecnologia = [{
    nome: 'JavaScript',
    especialidade: 'Web/Mobile'
  },
  {
    nome: 'CSS',
    especialidade: 'Web'
  },
  {
    nome: 'Java',
    especialidade: 'Desktop'
  },
]



console.log(`O programador ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${tecnologia[0].nome} com especialidade em ${tecnologia[0].especialidade}`)