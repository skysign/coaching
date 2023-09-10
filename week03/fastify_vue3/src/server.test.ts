import fastify from "./server.ts";
import { test, expect } from "vitest";

test("hello", async () => {
  const response = await fastify.inject({
    method: "GET",
    url: "/",
  });

  expect(response.json()).toEqual({ hello: "world" });
});
