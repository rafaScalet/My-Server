export const dbs = {
  vacinados: {
    contact: [
      { teste: "teste"}
    ],
    type: []
  }, // Array para armazenar os dados dos vacinados.
  castrados: [], // Array para armazenar os dados dos castrados.
}

export default function setDb (request) {
  const {dbName, tableName} = request.params; // Obtém o nome da tabela passado na URL.

  if (tableName) {
    return dbs[dbName][tableName]; // Retorna a referência ao array de dados correspondente à tabela.
  }
  return dbs[dbName]; // Retorna a referência ao array de dados correspondente ao arquivo.
}