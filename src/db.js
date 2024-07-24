const dbs = {
  vacinados: {
    contact: [
      { teste1: "teste1"},
      { teste2: "teste2"},
      { teste3: "teste3"},
    ],
    type: []
  },
  castrados: {}
}

export function setInputsObj (request) {
  const { dbName, tableName, id } = request.params;


  const inputs = {
    dbs,
    dbName,
    tableName,
    id
  }

  return inputs;
}

export function setDb (request) {
  const {dbName, tableName} = request.params;

  const db = dbs[dbName][tableName]

  return db
}