import * as express from "express";
import * as http from "http";
import * as Websocket from "ws";

const app = express();
// const server = http.createServer(app);

const wsServer = new Websocket.WebSocket.Server({ port: 8080 });

wsServer.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(message);
  });
});

app.listen(8888, () => {
  console.log("App running on port");
});
