console.log("Para definir uma classe ou conjunto usamos []");

const regexPares = /[02468]/g;
const texto = `1,2,3,4,5,6,a.b c!d?e`;

console.log(
  texto.match(regexPares),
  "Se tirarmos os numeros de dentro do conjunto ele vai procurar a sequencia de numeros informada"
);

console.log("Procurar com acentuação");
const texto2 = `João não vai passear na moto.`;
const regexComESemAcento = /n[aã]o/g;
console.log(
  texto2.match(regexComESemAcento),
  "Passar com e sem acento dentro do conjunto"
);
