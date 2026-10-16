import { createServer } from "node:http";
import { handler } from "./app.js";

const port = Number(process.env.PORT || 3000);

const server = createServer(handler);

server.listen(port, "0.0.0.0", () => {
  console.log(`Hello DevOps running on port ${port}`);
});