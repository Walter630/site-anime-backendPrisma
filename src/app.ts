// src/server.ts
import express from "express";
import { createServer } from "http";
import { initSocket } from "./utils/sockets/sokec";

const app = express();
app.use(express.json());

const httpServer = createServer(app);

// Importando as rotas
import { Api } from "./api/routes/Api";
import { AnimesApi } from "./api/routes/AnimesRota";

// Inicializando a API
const api = new Api();
AnimesApi.build(api);

// inicializa e configura todos os eventos ↓
initSocket(httpServer);

httpServer.listen(3000, () => {
  console.log("⚡ HTTP + Socket.IO rodando na porta 3000");
});
