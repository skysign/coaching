import { Type as t, TypeBoxTypeProvider, TypeBoxValidatorCompiler } from '@fastify/type-provider-typebox'
import Fastify from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

const fastify = Fastify({
  logger: false,
})
    .setValidatorCompiler(TypeBoxValidatorCompiler)
    .withTypeProvider<TypeBoxTypeProvider>()

await fastify.register(swagger, {
  swagger: {
    info: {
      title: "Test swagger",
      description: "Testing the Fastify swagger API",
      version: "0.1.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "localhost:3000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
});

await fastify.register(swaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  transformSpecificationClone: true,
});

// Declare a route
fastify.get(
  "/",
  {
    schema: {
      response: {
        200: t.Object({ hello: t.String() }),
      },
    },
  },
  async () => {
    return { hello: 'world' };
  }
);

// fastify.register(registerBatches, { prefix: '/batches' })

export default fastify;

// dev
// typescript
// node -> ts-node
// pino -> pino-pretty

// dependency
// fastify
// swagger, swagger-ui
// validator, typebox, zod, typia (express, nest)

// http://localhost:8080/ping
