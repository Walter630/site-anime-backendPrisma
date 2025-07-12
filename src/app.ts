import express from "express";
import { createServer } from "http";
import { initSocket } from "./utils/sockets/sokec";
import cors from "cors";
import { Api } from "./api/routes/Api";
import { AnimesApi } from "./api/routes/AnimesRota";
import { UserRota } from "./api/routes/UserRota";
import { Rotas } from "./api/routes/TIpoUsuarioRota";
import { MangasRota } from "./api/routes/MangasRota";

const app        = express();
app.use(express.json());
app.use(cors());


const httpServer = createServer(app);           // único servidor

/* ---------- ROTAS ---------- */
app.use((req, _, next) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
  });
const api = new Api();                       // usa o mesmo Express
AnimesApi.build(api);
UserRota.build(api);
Rotas.build(api);
MangasRota.build(api);

app.use(api.expressRouter);

/* ---------- SOCKET ---------- */
initSocket(httpServer);

/* ---------- START ---------- */
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () =>
  console.log(`Servidor na porta ${PORT}`)
);
