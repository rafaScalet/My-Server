import setDb from '../db.js';

export function save (request, reply) {
  const table = setDb(request); // Obtém a referência ao array de dados correspondente ao arquivo.

  const data = request.body; // Obtém os dados enviados na requisição.

  table.push(data); // Adiciona os dados ao array de vacina.

  reply.status(201).send(); // Retorna um status 201 (Created) para indicar que os dados foram criados.
}