export const tables = {
  vacinados: [], // Array para armazenar os dados dos vacinados.
  castrados: [], // Array para armazenar os dados dos castrados.
}

export function setTableName (request) {
  const tableName = request.params.file; // Obtém o nome da tabela passado na URL.
  const table = tables[tableName]; // Obtém a referência ao array de dados correspondente ao arquivo

  return table; // Retorna a referência ao array de dados correspondente ao arquivo.
}