import { setInputsObj } from '../db.js';

export function list (request, reply) {
  const { dbs, dbName, tableName } = setInputsObj(request);

  const id = request.query.id;

  if (!(id >= 1 && id <= dbs[dbName][tableName].length)) {
    if (!id) {
      if (!tableName) {
        if (!dbName) {
          reply.status(200).send(dbs);
        } else {
          reply.status(200).send(dbs[dbName]);
        }
      } else {
        reply.status(200).send(dbs[dbName][tableName]);
      }
    } else {
      reply.status(404).send();
    }
  } else {
    reply.status(200).send(dbs[dbName][tableName][id - 1]);
  }
}