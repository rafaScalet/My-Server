import { tables, setTableName} from './db.js'; // Importa o objeto tables.

export function listData (request, reply) {
  const table = setTableName(request); // Obtém a referência ao array de dados correspondente ao arquivo.

  const id = parseInt(request.query.id, 10); // Obtém o ID do registro passado na URL.

  if (id) {
    if (id >= 1 && id <= table.length) {
      reply.status(200).send(table[id - 1]); // Retorna os dados do registro com o ID especificado.
    } else {
      reply.status(404).send(); // Resposta de erro.
    }
  }
  reply.status(200).send(table); // Retorna os dados do array de selecionado.
}

export function addData (request, reply) {
  const table = setTableName(request); // Obtém a referência ao array de dados correspondente ao arquivo.

  const data = request.body; // Obtém os dados enviados na requisição.

  table.push(data); // Adiciona os dados ao array de vacina.

  reply.status(201).send(); // Retorna um status 201 (Created) para indicar que os dados foram criados.
}

export function editData (request, reply) {
  const table = setTableName(request); // Obtém a referência ao array de dados correspondente ao arquivo.

  const id = parseInt(request.params.id, 10); // Obtém o ID do registro passado na URL.

  const data = request.body; // Obtém os dados enviados na requisição.

  if (id >= 1 && id <= table.length) {
    table[id - 1] = data; // Substitui os dados do registro com o ID especificado.
    reply.status(200).send(); // Resposta de sucesso.
  } else {
    reply.status(404).send(); // Resposta de erro.
  }
}

export function deleteData (request, reply) {
  const table = setTableName(request); // Obtém a referência ao array de dados correspondente ao arquivo.

  const id = parseInt(request.params.id, 10); // Obtém o ID do registro passado na URL.

  const data = request.body; // Obtém os dados enviados na requisição.

  if (id >= 1 && id <= table.length) {
    table.splice(id - 1, 1); // Remove o registro com o ID especificado.
    reply.status(204).send(); // Resposta de sucesso.
  } else {
    reply.status(404).send(); // Resposta de erro.
  }
}