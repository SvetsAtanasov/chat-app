"use strict";
exports.__esModule = true;
var express = require("express");
var Websocket = require("ws");
var app = express();
// const server = http.createServer(app);
var wsServer = new Websocket.WebSocket.Server({ port: 8080 });
wsServer.on("connection", function (ws) {
    ws.on("message", function (message) {
        console.log(message);
    });
});
app.listen(8888, function () {
    console.log("App running on port");
});
