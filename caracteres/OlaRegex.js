const texto = "Casa bonita é casa amarela da esquina com a Rua ACASALAR";

// posso utilizar expressoes literais diretamente no regex
const regex = /casa/gi;
console.log(texto.match(regex));
console.log(texto.match(/a b/));
