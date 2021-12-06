const regex = /\.mp3/g;
const ritmo = /\w+\.\w+/gm;
const texto =
  "Lista de arquivos mp3: jazz.mp3, rock.mp3, podcast.mp3, blues.mp3";

console.log(texto.match(regex));
console.log(texto.match(ritmo));
