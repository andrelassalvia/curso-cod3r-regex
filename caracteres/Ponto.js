// . é um coringa, válido para somente uma posicao

const texto = "1,2,3,4,5,6,7,8,9,0";
// Sendo coringa, o ponto substitui qualquer caractere que esteja em uma posicao.
console.log(texto.match(/1.2/g)); // nesse caso ira substituir a virgula.
console.log(texto.match(/1..2/g)); // nesse caso nao faz match com nada.
console.log(texto.match(/1..,/g)); //

const notas = `8.3,7.1,8.8,10.0`;
console.log(notas.match(/8../g)); // o ponto tambem substitui o valor do ponto
console.log(notas.match(/.\../g)); // Qualquer coisa com um ponto no meio
