// . ? * + - ^ $ | [] {} () \ :
const texto = "1,2,3,4,5,6,a.b c!d?e";
const regexPonto = /\./g; // \ significa scape. Funciona para que um metacaracter seja procurado de forma literal. O .(ponto) por exemplo.
console.log(texto.split(regexPonto)); // cria um array separando pelo ponto

// criar array separando por qualquer simbolo
const regexSimbolos = /\.|,|\?|!| /g;
console.log(texto.split(regexSimbolos));
