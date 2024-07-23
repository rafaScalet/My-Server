const dbs = {
  vacinados: {
    contact: [
      { teste1: "teste1"},
      { teste2: "teste2"},
      { teste3: "teste3"},
    ],
    type: []
  }, // Array para armazenar os dados dos vacinados.
  castrados: [], // Array para armazenar os dados dos castrados.
}

export default function setInputs (request) {
  const {dbName, tableName} = request.params; // Obtém o nome da tabela passado na URL.
  const id = request.query.id; // Obtém o ID passado na URL.

  const inputs = {
    dbs,
    dbName,
    tableName,
    id
  }
  return inputs;

  // if (tableName) {
  //   return dbs[dbName][tableName]; // Retorna a referência ao array de dados correspondente à tabela.
  // }
  // return dbs[dbName]; // Retorna a referência ao array de dados correspondente ao arquivo.
}