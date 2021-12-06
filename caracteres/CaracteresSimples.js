const texto = `1,2,3,4,5,6,a.b c!d?e`;

// podemos colocar textos literais dentro de expressoes regulares
const regexVirgula = /,/;
console.log(texto.split(regexVirgula)); // quebra em arrays onde houver virgulas
console.log(texto.match(regexVirgula)); // somente a primeira virgula
console.log(texto.match(/,/g)); // todas as virgulas
console.log(texto.match(/A/)); // nao tem A maiusculo
console.log(texto.match(/A/gi)); // qualquer A case insensitive
