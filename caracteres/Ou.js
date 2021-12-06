const texto = "Voce precisa responder sim, nao ou nao sei!";
console.log(texto.match(/sim|nao\ssei|nao/g)); // passar "nao sei" primeiro para buscar antes o mais abrangente.
// | - Ou
