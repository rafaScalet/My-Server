import { setInputsObj } from '../db.js';

export function edit (request, reply) {
  const { dbs, dbName, tableName, id } = setInputsObj(request);

  const db =  dbs[dbName][tableName];

  if (!(id >= 1 && id <= db.length)) {
    reply.status(404).send();
    return;
  }

  const data = request.body

  db[id - 1] = data;

  reply.status(200).send();
}