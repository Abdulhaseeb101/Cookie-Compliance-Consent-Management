// Importing fastify
const fastify = require("fastify")({
  logger: true,
});

fastify.log.info("📋 Mounting Dependencies 📋");
fastify.register(require("@fastify/cors"));
fastify.register(require("./dbConnector"));
fastify.register(require("./routes"));

fastify.log.info("🧪 Setting up ping route at /api/v1/ping 🧪");
fastify.get("/api/v1/ping", (request, reply) => {
  reply.send({
    ping: "PONG,",
  });
});

fastify.log.info("🚀🚀 Launching server !! 🚀🚀");
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
