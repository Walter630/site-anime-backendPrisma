// src/socket.ts
import { Server as HttpServer } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";

let io: SocketIOServer | null = null;

/**
 * Chame esta função logo depois de criar o servidor HTTP.
 */
export function initSocket(server: HttpServer) {
  io = new SocketIOServer(server, {
    cors: { origin: "*", methods: ["GET", "POST"] },
  });

  io.on("connection", (socket: Socket) => {
    console.log("Cliente conectado:", socket.id);

    // ← eventos de exemplo
    socket.on("message", (msg) => {
      console.log("📩 Mensagem recebida:", msg);
      io?.emit("message", msg);          // broadcast para todos
    });

    socket.on("private_message", (msg) => {
      console.log("📩 Mensagem privada recebida:", msg);
      socket.emit("private_message", msg); // envia só para o remetente
    });
    // ← evento de notificação
    // (pode ser usado para enviar notificações em tempo real)
    // Exemplo: quando um usuário envia uma notificação, todos os outros recebem
    // (pode ser usado para enviar notificações em tempo real)
    
    socket.on("notification", (payload) => {
      console.log("🔔 Notificação:", payload);
      socket.emit("notification", { ok: true }); // resposta só p/ quem enviou
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });
}

/** Use para importar o `io` em outras partes (se precisar emitir). */
export function getIO(): SocketIOServer {
  if (!io) throw new Error("Socket.io não inicializado");
  return io;
}
