import { dbs } from './db.js';

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