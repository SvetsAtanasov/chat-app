import * as express from "express";
import * as Websocket from "ws";
import * as cors from "cors";

import initMongoDb from "./services/database/mongoDb";
import authRouter from "./routes/auth/auth";

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouter);

const wsServer = new Websocket.WebSocket.Server({ port: 8080 });

wsServer.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(message);
  });
});

initMongoDb().then(() =>
  app.listen(8888, () => {
    console.log("App running on port 8888");
  })
);
