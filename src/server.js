import fastify  from 'fastify';

const tables = {
  "vacinados": [], // Array para armazenar os dados dos vacinados.
  "castrados": [], // Array para armazenar os dados dos castrados.
};

// Criar uma instância do Fastify com logs ativados.
const server = fastify({ logger: true  });

// Definindo um endpoint para listar todos os dados do array vacina.
server.get('/:file', (request, reply) => {
  const tableName = request.params.file; // Obtém o nome da tabela passado na URL.
  const table = tables[tableName]; // Obtém a referência ao array de dados correspondente ao arquivo.

  // Retorna os dados do array de vacina.
  reply.status(200).send(table);
});

// Definindo um endpoint para adicionar dados ao array vacina.
server.post('/:file', async (request, reply) => {
  const tableName = request.params.file; // Obtém o nome da tabela passado na URL.
  const table = tables[tableName]; // Obtém a referência ao array de dados correspondente ao arquivo.

  const data = request.body; // Obtém os dados enviados na requisição.

  table.push(data); // Adiciona os dados ao array de vacina.

  reply.status(201).send(); // Retorna um status 201 (Created) para indicar que os dados foram criados.
});

// Inicia o servidor Fastify na porta 3000 e no host '0.0.0.0'.
server.listen({
  port: 3333, // Define a porta onde o servidor ouvirá as requisições.
  host: '0.0.0.0' // Define o host como '0.0.0.0', que faz o servidor escutar em todas as interfaces de rede.
}, () => {
  // Callback que é executado quando o servidor começa a escutar requisições.
  console.log(`Server is running on ${server.server.address().address}:${server.server.address().port}`);
});