// ## Operadores de comparação:

// - (>) Maior
// - (<) Menor
// - (>=) Maior igual a
// - (<=) Menor igual a
// - (==) Igual a
// - (===) Igual e do mesmo tipo
// - (!=) Diferente de
// - (!==) Diferente, inclusive do tipo



// DESAFIO 1
const idade = 18
// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entra, se não, bloquear a entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

if (!(idade >= 18) || idade === 17) {
  console.log('Bloquear a entrada')
} else {
  console.log('Deixar entrar')
}



// Operadores lógicos

//  - && "E" as duas condições devem ser verdadeiras para que a condição final seja verdadeira

console.log(5 == 5 && 6 == 6)

console.log(5 == 5 && 6 != 6)


//  - || "OU" uma das condições deve ser verdadeira para que a condição final seja verdadeira

console.log(5 == 5 || 6 == 6)

console.log(5 == 5 || 6 != 6)


//  - ! "NÃO" nega uma condição

console.log(!(5 > 6))




// Operadores aritméticos

//  - (+) (adição)
//  - (-) (subtração)
//  - (*) (multiplicação)
//  - (/) (divisão)
//  - (%) (o resto de uma divisão, Ex: 5/5 = 1, ou seja, o resto seria **0**)

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0 