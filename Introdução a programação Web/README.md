

<h1 align=center> BOOTCAMP LAUNCHBASE! </h1>

<p align=justify>Olá! Aqui serão inseridas as informações referentes aos conteúdos abordados no Bootcamp LaunchBase, tentarei ser o mais analítico possível para facilitar o entendimento dos demais. </p>
<br>
<br>
<h1 align=center> O que é programação?</h1>

 Ensinar o computador a trabalhar, passar através de algoritimos(códigos) o que ele deve fazer. Fazemos isso através das linguagens de programação, são elas:
 - Python
 - Java
 - PHP
 - JavaScript
 - Entre outras
<br>
<br>

<h1 align=center> Por que JavaScript?</h1>

 Uma linguagem que está no topo das paradas, super moderna, fácil de se inscrever e possui uma curva de aprendizado bem interessante.

## Principais pontos:
 - Linguagem moderna
 - Comunidade ativa e muito forte, grandes empresas utilizam a linguagem (Youtube, Facebook, Airbnb, entre outros)
<br>
<br>
 
<h1 align=center> Como programar?</h1>

 - Aprender a linguagem
 - Ter um ambiente de desenvolvimento (VS Code, Chrome, NodeJs, entre outros aplicativos)
 - Codar! (Meter a mão na massa, rsrs)
<br>
<br>

<h1 align=center> Exemplo de código em JavaScript</h1>

 const nome = 'Jorge'
 const idade = '25'

 if (idade < 99) {
return 'Fala ${nome}, você está novo para programar.'
}

// Fala Jorge, você está novo para programa
<br>
<br>



<h1 align=center> Iniciando com JavaScript</h1>

<p align=justify>Para iniciarmos, devemos criar uma pasta em nosso HD, o local e nomenclatura fica por sua conta, pode escolher. Uma vez criada, devemos fazer os seguintes passos:
- No VS Code -> File -> Open Folder, iremos então selecionar a pasta criada.
- Devemos criar um novo arquivo e colocar o nome de index.js (a extensão **.js** é de extrema importância para que o programa reconheça que é um arquivo JavaScript.)

 <p align=justify>Dentro deste arquivo, devemos nos atentar a sintaxe, a sintaxe é a forma de escrita do código, ela deve ser feita de forma correta para que o navegador possa ler essas informações e responder conforme solicitado. Então, segue exemplo de sintaxe:

 - const nome = 'Jorge'
 > const = constante, é a declaração de uma varíavel, esse valor será levado por todo o sistema, até que seja alterado manualmente.

 Para que seja mostrado alguma informação em nosso terminal, devemos usar a sintaxe:

 - console.log (nome)
 >Essa linha de código irá chamar o que está dentro da varíavel para nosso console, desta forma podemos verificar o que está dentro dela.

 Para testarmos, devemos chamar essa linha de código dentro do nosso terminal, utilizando o VS code o atalho para o terminal é **CTRL + SHIFT + '** (Atenção para não abrir vários.)

 Dentro do terminal, devemos chamar da seguinte forma: **node index.js**. Com este comando, será apresentado em tela o conteúdo da varíavel.

 Com isso já temos nossa primeira linha de código criada, já podemos afirmar que estamos **codando em JS!** (Uhuuuuu \o/)
 <br>
<br>
 
<h1 align=center>Comentários, Strings e Numbers </h1>
<br>
## Comentários

 <p align=justify>Os comentários no JS ou em qualquer linguagem, serve para que possamos escrever lembretes e comentar linhas de código sem que elas apareçam na tela. (para quem está começando essa é uma boa prática, comentar cada linha para se localizar depois revendo seu código.)

 Para criarmos comentários no JS devemos fazer da seguinte forma:

 - // Comentando o código JS
 > Utilizando essas **//**, tudo que vier após entrará como comentário, e como dito, não aparecerá na tela ou no console.
<br>

## String

 String é um tipo de varíavel, ela recebe qualquer tipo de valor, texto, numero, etc. Veja exemplos de strings:

 - const aluno1 = 'Jorge'
 - const aluno2 = "Teixeira"
 - const aluno3 = `Junior`

 Podemos utilizar essas três formas, as duas primeiras são **aspas simples ou dupla**, não há diferença, entretanto, devemos nos atentar na ultima const.

 A const aluno3 está com a **Template string**, com ela podemos acrescentar outra varíavel dentro dela mesma, como por exemplo:

 - const aluno3 = `Junior e ${aluno1}`
 > console.log(aluno3)
 > Resultado: Junior e Jorge

 Perceba que, apenas utilizando a crase **``** é possível fazer isso, com as aspas não conseguimos, o resultado será:

 - const aluno1 = 'Jorge e ${aluno2}'
 > console.log (aluno1)
 > Resultado: Jorge e &{aluno2}
<br>
<br>

## Number

<p align=justify> Number também é um tipo de varíavel, porém ela recebe apenas valores numéricos, sejam eles *Inteiros (Int), ou Decimais(Float). Para declará-los, é bem simples, devemos fazer o seguinte:

 - const notaAluno1 = 9.8
 - const notaAluno2 = 10

<p align=justify> Desta forma teremos declarado dois tipo de numbers, tanto inteiro (10), quanto float (9.8)


 Para podermos saber que tipo de varíavel estamos utilizando, podemos utilizar o *typeof*, ele nos dirá qual tipo de varíavel está sendo chamada, como por exemplo:

 - console.log(typeof notaAluno1)
 > Resultado: number

 - console.log(typeof aluno1)
 > Resultado: string
<br>
<br>

<h1 align=center> Fazendo cálculos com JavaScript</h1>

 <p align=justify>Para realizarmos cálculos no JS é bem simples, devemos seguir a lógica matemática, pura e simples, sem mistério. Como podemos fazer isso? Da seguinte forma:

 - const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3
 - console.log(media)
 > Resultado: 7.266

 Então, realizamos primeiro a soma (na1 + na2 + na3) e após dividimos pelo numero de alunos (/3), com isso conseguimos obter a média.

<br>
<br>
<h1 align=center> Condicionais</h1>

 Estruturas condicionais servem para podermos tomar decisões dentro do código, isso mesmo, elas vão nos dar condições. Vamos trazer isso para a prática. 

 Imagine você preparando seu almoço, vai fritar um bife(suculento), então, a condição é a seguinte: 
 
 - Se a frigideira estiver quente, coloque o bife
 - Se não, espere esfriar para poder colocar o bife

 Pronto, temos uma estrutura condicional, fácil não é? Não, não é, mas vai ficar, rsrs.

 Com comida foi, mas vamos testar isso na sintaxe correta? Então ficaria +- assim:

 - if (media > 5) {
	console.log(`A nota foi de ${media}. Parabéns!`)
 } else {
	console.log('A média é menor que 5')
 }

 > Resultado: A nota foi de 7.266. Parabéns!

 Viu como também fica fácil? Então vamos lá, vamos destrinxar isso.

 Quando utilizamos **if**, dizemos que se a condição **(media > 5)** for verdadeira, entrará dentro deste bloco de código:  console.log(`A nota foi de ${media}. Parabéns!`)

 Quando o resultado não for como a nossa condição, então ele cai no bloco **else**, falso: console.log('A média é menor que 5').

 Agora ficou mais fácil né?

 Também podemos acrescentar mais **ifs** dentro da estrutura, mas deixemos isso para um outro momento.
<br>
<br>

<h1 align=center>Operadores relacionais e comparativos</h1>

 <p align=justify>Os operadores relacionais e comparativos nos permitem fazer algumas apurações como o nome já indica, podemos relacionar um valor ao outro, comparar um ao outro ou até mesmo os dois. Certo, vamos para a sintaxe para melhor compreensão:

 - const idade = 16

 > // verificar se a pessoa é maior igual a 18 anos
   // se sim, deixar entra, se não, bloquear a entrada

 - if (idade >= 18) {
  console.log('Deixar entrar')
} else {
  console.log('Bloquear a entrada')
}


// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

- if (idade === 17) {
  console.log('Voltar quando fizer 18 anos')
} else {
  console.log('Deixar entrar')
}<br>
<br>

 ## Operadores de comparação:

 - (>) Maior
 - (<) Menor
 - (>=) Maior igual a
 - (<=) Menor igual a
 - (==) Igual a
 - (===) Igual e do mesmo tipo
 - (!=) Diferente de
 - (!==) Diferente, inclusive do tipo

<br>
<br>
<h1 align=center> Operadores lógicos e aritméticos</h1>

## Operadores lógicos

 Os operadores lógicos servem para nos dar um resultado lógico (como o próprio nome diz, dur) em uma determinada situação, vamos aos exemplos:

 - && "E" as duas condições devem ser verdadeiras para que a condição final seja verdadeira

 > console.log(5 == 5 && 6 == 6)
 > Resultado: True

 > console.log(5 == 5 && 6 != 6) 
 > Resultado: False

 - || "OU" uma das condições deve ser verdadeira para que a condição final seja verdadeira

 > console.log(5 == 5 || 6 == 6)
 > Resultado: True

 > console.log(5 == 5 || 6 != 6)
 > Resultado: True

 - ! "NÃO" nega uma condição

 > console.log (!(5 > 6))
 > Resultado: True
<br>
<br>
 


## Operadores aritméticos

 O operadores aritméticos são os mesmos utilizados normalmente, não há alteração, são eles:

 - (+) (adição)
 - (-) (subtração)
 - (*) (multiplicação)
 - (/) (divisão)
 - (%) (o resto de uma divisão)


Exemplos:
 - console.log(2 * 2)
 > Resultado: 4

 - console.log(2 / 2)
 > Resultado: 1 

 - console.log(2 % 1.5)
 > Resultado: 0.5

 - console.log(2 + 2)
 > Resultado: 4

 - console.log(2 - 2)
 > Resultado: 0
 <br>
<br>

<h1 align=center> Objetos</h1>

 <p align=justify>Objeto na programação é a junção de algumas propriedades de um determinado objeto. Ficou confuso? Calma, vamos trazer isso para a realidade. Pense em seu celular, ele não é um objeto? Então, ele possui cor, peso, especificações e por ai vai. Na programação é a mesma coisa.

 Vamos aos códigos?

 - Exemplos:
> const aluno01 = {
  nome: 'Jorge',
  nota: 9.8
}

> const aluno02 = {
  nome: 'Laryssa',
  nota: 10
}

> const aluno03 = {
  nome: 'Lauana',
  nota: 2
} 


 Perceba que declaramos uma varíavel normalmente, como já visto, e após isso colocamos as propriedades dentro de chaves como os exemplos acima.

 Para acessarmos esse objeto, podemos fazer da seguinte forma:

 - const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

 > aluno01.(nota, nome), podemos utilizar as propriedades do objeto.
<br>
<br>

<h1 align=center> Vetores (Array)</h1>

 Podemos dizer que Vetores (Array) é uma varíavel com a junção de vários objetos. Isso mesmo, podemos em uma unica varíavel juntar diversos objetos e escolhermos qual iremos chamar em determinado momento. Ainda não entendeu? Vamos para o código:

 - Exemplo:

 > const alunos = [{
    nome: 'Jorge',
    nota: 9.8
 > },
 > {
    nome: 'Laryssa',
    nota: 10
 > },
 > {
    nome: 'Luana',
    nota: 2
 > }
> ]

 Veja que interessante, neste exemplo, podemos afirmar que dentro da varíavel *alunos* há 03 objetivos, nome e nota em cada um deles. Legal né?

 Como ficaria então para podermos achar a média dos alunos utilizando arrays? Vamos verificar:

 > const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

 Veja, declaramos a varíavel **alunos** e então com os [] chamamos o objeto que queremos, mas perceba que, a contagem se inicia do 0 e não do 1, ok? Então no caso de 03 objetos, a contagem será assim: 0, 1 e 2.

 Vejamos outro exemplo de array:

 > const nomesDeAlunos = ['Jorge', 'Laryssa', 'Luana']

 Desta forma, temos 03 propriedades dentro de uma unica varíavel.
<br>
<br>

<h1 align=center> Funções e métodos</h1>

<p align=justify>Podemos dizer que a função serve para agrupar um bloco de códigos, afim de que eles tenham ação já definida. É, criamos uma função para reaproveitar determinado código, sem que tenhamos que ficar digitando ele o tempo todo. Vamos codar?

 - Exemplo:
> function calculaMedia(alunos) {
>   return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
> }

> const media1 = calculaMedia(alunosDaTurmaA)
> const media2 = calculaMedia(alunosDaTurmaB)

 Veja que dentro da função, reaproveitamos a varíavel **alunos**, porém ela não esta mais em nenhum lugar, sendo assim, incluimos ela na função **(alunos)**. Porém, abaixo, devemos dizer quais serão os parâmetros que retornaram dentro da função, por isso utilizamos:
> calculaMedia(alunosdaTurmaA)
> calculaMedia(alunosdaTurmaB)

 Desta forma, dizemos que os **(alunos)** da função, são equivalentes aos **(alunosDaTurmaA) e (alunosDaTurmaB)**.

 Ficou um pouco consufo? Não tem problema, é assim mesmo, com o tempo o conceito de função irá ficar mais claro, mas até lá, estude!
<br>
<br>

<h1 align=center> Estrutura de repetição</h1>

<p align=justify> Nessa parte iremos aprender como repetir uma estrutura de dados que já temos. Como assim? Isso mesmo, iremos repetir informações de um bloco de código até determinado momento, simples assim. (brincadeira, não é simples, por isso vamos aos códigos, :D)

 - Exemplo de código:
> function calculaMedia(alunos) {
>  for (let i = 0; i < alunos.length; i++) {
>  }

Vamos lá, apareceram alguns códigos novos né? Vamos entender o que eles representam.

- **let** = declaração de uma varíavel, só que diferente de **const**, ela serve para declarar um valor que sofrerá mudança. 

- **length** = essa propriedade serve para termos acesso a toda quantidade de **alunos** neste caso, ou seja, se possuimos 03 alunos dentro do array, então ele trará esse total.

<p align=justify>  No código declaramos então que </strong>i = 0</strong>, ok? Continua comigo. Então, na próxima sequência, dizemos que o valor de de <strong>i < alunos.length</strong> e por fim, caso não seja, incrementamos o valor de i, utilizando o <strong>i++</strong>. Conseguiu acompanhar? Vou tentar traduzir, saca só:

<p align=justify>  Falamos que o <strong>i = 0</strong>, depois, também dizemos que se o <strong>i < alunos.length</strong>, iremos incrementar com o <strong>i++</strong>. Com isso, o código irá repetir até que o <strong>i</strong> não seja menor que o **alunos.length</strong>. Ficou mais claro? Espero que sim.
