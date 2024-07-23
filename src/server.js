import { addData, deleteData, editData, listData } from './routes.js';
import fastify  from 'fastify';

// Criar uma instância do Fastify com logs ativados.
const server = fastify({ logger: true  });

// Definindo um endpoint para listar todos os dados do array vacina.
server.get('/:file', listData);
server.post('/:file', addData);
server.put('/:file/:id', editData);
server.delete('/:file/:id', deleteData);

// Inicia o servidor Fastify na porta 3000 e no host '0.0.0.0'.
server.listen({
  port: process.env.PORT ?? 3333, // Define a porta onde o servidor ouvirá as requisições.
  host: '0.0.0.0' // Define o host como '0.0.0.0', que faz o servidor escutar em todas as interfaces de rede.
}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  // Callback que é executado quando o servidor começa a escutar requisições.
  console.log(`Server is running on ${address}`);
});