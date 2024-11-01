"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Websocket = require("ws");
var cors = require("cors");
var http_1 = require("http");
var mongoDb_1 = require("./services/database/mongoDb");
var auth_1 = require("./routes/auth/auth");
var user_1 = require("./routes/user/user");
var app = express();
var server = (0, http_1.createServer)(app);
app.use(cors());
app.use(express.json());
app.use(auth_1.default);
app.use(user_1.default);
var clients = {};
var wsServer = new Websocket.WebSocketServer({ server: server });
wsServer.on("connection", function (ws) {
    console.log("A new client connected");
    // Send a welcome message to the newly connected client
    ws.send("Welcome to the WebSocket server!");
    ws.on("message", function (message) {
        var _a = JSON.parse(message), type = _a.type, email = _a.email;
        console.log("Received:", message);
        if (type === "REGISTER") {
            clients[email] = ws;
        }
        if (type === "PRIVATE_MESSAGE") {
        }
    });
    ws.on("close", function () {
        console.log(wsServer.clients.size);
        console.log("Client disconnected");
    });
    ws.on("error", function (error) {
        console.error("WebSocket error:", error);
    });
});
(0, mongoDb_1.default)().then(function () {
    return server.listen(8888, function () {
        console.log("App running on port 8888");
    });
});
