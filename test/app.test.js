import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { handler } from "../app.js";

async function withServer(callback) {
  const server = createServer(handler);

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  try {
    const address = server.address();
    await callback(`http://127.0.0.1:${address.port}`);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }
}

test("home page returns Hello DevOps", async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(baseUrl);

    assert.equal(response.status, 200);
    assert.match(await response.text(), /Hello, DevOps!/);
  });
});

test("health endpoint returns healthy status", async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/health`);

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
      status: "healthy"
    });
  });
});

test("unknown route returns 404", async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/unknown`);

    assert.equal(response.status, 404);
  });
});