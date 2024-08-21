import { setInputsObj } from './../db/db-config.js';

export function drop(request, reply) {
  const { dbs, dbName, tableName, id } = setInputsObj(request);

  const db =  dbs[dbName][tableName];

  if (!(id >= 1 && id <= db.length)) {
    reply.status(404).send();
    return;
  }

  db.splice(id - 1, 1);

  reply.status(200).send();
}