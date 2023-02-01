const fastify = require("fastify")({ logger: true });

fastify.get("/api/ping", (request, reply) => {
  reply.send({ hello: "Sagar Sir" });
});

fastify.get("/api/1", (request, reply) => {
  reply.send({ hello: "Arishem" });
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
