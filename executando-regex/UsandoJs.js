const texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

const regexNove = RegExp("9"); // RegExp é uma funcao para criarmos uma expressao regular.

console.log("Metodos da Regex...");
console.log(regexNove.test(texto)); //test retorna true ou false
console.log(regexNove.exec(texto));

const regexLetras = /[a-f]/g;
console.log("Metodos da String...");
console.log(texto.match(regexLetras));
console.log(texto.search(regexLetras)); // encontra a posicao do primeiro elemento
console.log(texto.replace(regexLetras, "Achei")); // Substitui cada elemento encontrado pela palavra 'achei'.
console.log(texto.split(regexLetras)); // gera um array separando o que der match com a regex
