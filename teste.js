import { writeFile, readFile } from 'node:fs';

// Seu objeto JavaScript
const obj = {
  vacinados: {
    contact: [
      { teste1: "teste1"},
      { teste2: "teste2"},
      { teste3: "teste3"},
    ],
    type: []
  },
  castrados: {}
};

var json // = JSON.stringify(obj, null, 2);

// writeFile('./arquivo.json', json, 'utf8', async (err) => {
//   if (err) {
//     console.error('Erro ao escrever o arquivo JSON:', err);
//   } else {
//     console.log('Arquivo JSON foi salvo com sucesso.');
//   }
// });

readFile('./arquivo.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
  } else {
    json = JSON.parse(data);
    console.log(json);
  }
});

writeFile('./arquivo.json', json, 'utf8', async (err) => {
  if (err) {
    console.error('Erro ao escrever o arquivo JSON:', err);
  } else {
    console.log('Arquivo JSON foi salvo com sucesso.');
  }
});