console.log('No JavaScript o ponto nao engloba o "n" de nova linha');
const texto = `Bom\ndia`;
const texto2 = `Bom\tdia`;
console.log(texto.match(/./gi), 'Nao le o "n"'); // nao consegue ler o \n
console.log(texto2.match(/./gi), "Mas consegue ler o tab"); // le o \t

console.log(
  texto.match(/.../gi),
  "Pedindo 3 caracteres em sequancia, nao le o 'n"
); // pega 3 caracteres em sequencia - nao le o \n
console.log(texto2.match(/.../gi), `Mas consegue ler o tab`); // pega 3 caracteres em sequencia - le o \t
