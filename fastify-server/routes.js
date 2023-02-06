const routeHandlers = require("./controller/consentHandlers");

async function routes(fastify, options) {
  fastify.post("/api/v1/createcon", routeHandlers.createConsent);
  fastify.get("/api/v1/getcon/:consentId", routeHandlers.getConsent);
  fastify.put("/api/v1/updatecon/:consentId", routeHandlers.updateConsent);
  fastify.put("/api/v1/deletecon/:consentId", routeHandlers.deleteConsent);
}

module.exports = routes;
