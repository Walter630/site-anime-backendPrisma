// src/server.ts
import express from "express";
import { createServer } from "http";
import { initSocket } from "./utils/sockets/sokec";

const app = express();
app.use(express.json());

const httpServer = createServer(app);

// inicializa e configura todos os eventos ↓
initSocket(httpServer);

httpServer.listen(3000, () => {
  console.log("⚡ HTTP + Socket.IO rodando na porta 3000");
});
