const texto = `a   b`;
console.log(texto.match(/\w\s+\w/gm));
console.log(texto.match(/\w\s{3}\w/gm));
// \w - primeira letra
// \w+ - primeira palavra
// \s+ - todos os espacos em branco
// {3} - quantificador
