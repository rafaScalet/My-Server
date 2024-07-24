import { setDb } from '../db.js';

export function drop(request, reply) {
  const table = setDb(request); // Obtém a referência ao array de dados correspondente ao arquivo.

  const id = parseInt(request.params.id, 10); // Obtém o ID do registro passado na URL.

  const data = request.body; // Obtém os dados enviados na requisição.

  if (id >= 1 && id <= table.length) {
    table.splice(id - 1, 1); // Remove o registro com o ID especificado.
    reply.status(204).send(); // Resposta de sucesso.
  } else {
    reply.status(404).send(); // Resposta de erro.
  }
}