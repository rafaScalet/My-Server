import { setInputsObj } from '../db.js';

export function save (request, reply) {
  const { dbs, dbName, tableName } = setInputsObj(request);

  const db =  dbs[dbName][tableName];

  const data = request.body

  if(dbs[dbName].hasOwnProperty(tableName)) {
    db.push(data);
    reply.status(201).send();
  } else {
    reply.status(404).send();
  }
}