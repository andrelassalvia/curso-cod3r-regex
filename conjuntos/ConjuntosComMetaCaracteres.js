const texto = ".$+*?-";

console.log(
  texto.match(/[+.?*$]/g),
  "Dentro do conjunto nao precisamos de scape para virar literal"
);
console.log(texto.match(/[.]/g), "Dentro do conjunto o ponto vira literal");

console.log(
  texto.match(/[+.?*$]./g),
  "Colocando um ponto fora ele forma duplas com a primeira posicao sendo coringa"
);
console.log(texto.match(/[$-?]/g), "O hifen esta determinando um intervalo");
console.log(texto.match(/[$\-?]/g), "O hifen aqui nao é um intervalo");

console.log(
  "Dentro do conjunto nao precisamos de scape para virar literal".match(
    /\b[a-z]/gi
  ),
  "Encontrar a primeira letra de cada palavra"
);
