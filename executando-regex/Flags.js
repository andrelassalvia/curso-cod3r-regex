// g -- global - procura todos, nao para na primeira
// i - ignora case - maiuscula e minusculas

const texto = "Carlos assinou o abaixo-assinado.";
console.log(texto.match(/C|ab/)); // nao encontro o ab pois a flag global nao esta alocada
console.log(texto.match(/c|ab/i));
console.log(texto.match(/ab|c/gi));
