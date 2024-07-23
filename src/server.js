import fastify  from 'fastify';

// Criar uma instância do Fastify com logs ativados
const server = fastify({ logger: true  });

// Inicia o servidor Fastify na porta 3000 e no host '0.0.0.0'.
server.listen({
  port: 3000, // Define a porta onde o servidor ouvirá as requisições
  host: '0.0.0.0' // Define o host como '0.0.0.0', que faz o servidor escutar em todas as interfaces de rede
}, () => {
  // Callback que é executado quando o servidor começa a escutar requisições.
  console.log(`Server is running on ${server.server.address().address}:${server.server.address().port}`);
});