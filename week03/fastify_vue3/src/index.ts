import fastify from './server.ts'

const start = async () => {
    try {
      await fastify.ready();
      fastify.swagger();
      const address = await fastify.listen({ port: 3000 });
  
      console.log(`Listening on ${address}`);
      console.log({ message: "Server is listening for requests." });
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  start();