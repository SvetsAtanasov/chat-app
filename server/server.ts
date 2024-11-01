import * as express from "express";
import * as Websocket from "ws";
import * as cors from "cors";
import { createServer } from "http";

import initMongoDb from "./services/database/mongoDb";
import authRouter from "./routes/auth/auth";
import userRouter from "./routes/user/user";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(userRouter);

const clients = {};

const wsServer = new Websocket.WebSocketServer({ server });

wsServer.on("connection", (ws) => {
  console.log("A new client connected");

  // Send a welcome message to the newly connected client
  ws.send("Welcome to the WebSocket server!");

  ws.on("message", (message: string) => {
    const { type, email } = JSON.parse(message);
    console.log("Received:", message);

    if (type === "REGISTER") {
      clients[email] = ws;
    }

    if (type === "PRIVATE_MESSAGE") {
    }
  });

  ws.on("close", () => {
    console.log(wsServer.clients.size);

    console.log("Client disconnected");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

initMongoDb().then(() =>
  server.listen(8888, () => {
    console.log("App running on port 8888");
  })
);
