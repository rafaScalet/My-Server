import setDb from '../db.js';

export function list (request, reply) {
  const data = setDb(request); // Obtém a referência ao array de dados correspondente ao arquivo.

  reply.status(200).send(data); // Retorna os dados do array de vacina que correspondem ao ID passado na URL
}