const texto = `1,2,3,4,5,6,a.b c!d?e`;

// podemos colocar textos literais dentro de expressoes regulares
const regexVirgula = /,/;
console.log(texto.split(regexVirgula));
console.log(texto.match(regexVirgula));
console.log(texto.match(/,/g));
console.log(texto.match(/A/));
console.log(texto.match(/A/gi));
