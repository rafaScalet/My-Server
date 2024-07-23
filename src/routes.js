import tables from './db.js'; // Importa o objeto tables.

export function listData (request, reply) {
  const tableName = request.params.file; // Obtém o nome da tabela passado na URL.
  const table = tables[tableName]; // Obtém a referência ao array de dados correspondente ao arquivo.

  // Retorna os dados do array de selecionado.
  reply.status(200).send(table);
}

export function addData (request, reply) {
  const tableName = request.params.file; // Obtém o nome da tabela passado na URL.
  const table = tables[tableName]; // Obtém a referência ao array de dados correspondente ao arquivo.

  const data = request.body; // Obtém os dados enviados na requisição.

  table.push(data); // Adiciona os dados ao array de vacina.

  reply.status(201).send(); // Retorna um status 201 (Created) para indicar que os dados foram criados.
}

export function editData (request, reply) {
  const tableName = request.params.file; // Obtém o nome da tabela e passada na URL.
  const table = tables[tableName]; // Obtém a referência ao array de dados correspondente ao arquivo.

  const id = parseInt(request.params.id, 10); // Obtém o ID do registro passado na URL.

  const data = request.body; // Obtém os dados enviados na requisição.

  // Verifica se o ID é válido.
  if (id >= 1 && id <= table.length) {
    table[id - 1] = data; // Substitui os dados do registro com o ID especificado.
    reply.status(200).send(); // Resposta de sucesso.
  } else {
    reply.status(404).send(); // Resposta de erro.
  }
}

export function deleteData (request, reply) {
  const tableName = request.params.file; // Obtém o nome da tabela e passada na URL.
  const table = tables[tableName]; // Obtém a referência ao array de dados correspondente ao arquivo.

  const id = parseInt(request.params.id, 10); // Obtém o ID do registro passado na URL.

  const data = request.body; // Obtém os dados enviados na requisição.

  // Verifica se o ID é válido.
  if (id >= 1 && id <= table.length) {
    table.splice(id - 1, 1); // Remove o registro com o ID especificado.
    reply.status(204).send(); // Resposta de sucesso.
  } else {
    reply.status(404).send(); // Resposta de erro.
  }
}