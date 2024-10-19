"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Websocket = require("ws");
var cors = require("cors");
var mongoDb_1 = require("./services/database/mongoDb");
var auth_1 = require("./routes/auth/auth");
var app = express();
app.use(cors());
app.use(auth_1.default);
var wsServer = new Websocket.WebSocket.Server({ port: 8080 });
wsServer.on("connection", function (ws) {
    ws.on("message", function (message) {
        console.log(message);
    });
});
(0, mongoDb_1.default)().then(function () {
    return app.listen(8888, function () {
        console.log("App running on port");
    });
});
