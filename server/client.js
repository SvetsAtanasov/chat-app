const WebSocket = require("ws");

const socket = new WebSocket.WebSocket("ws://localhost:8080");

socket.addEventListener("open", () => {
  console.log("open");
});
socket.addEventListener("message", (event) => {
  socket.send("Test");
});

socket.addEventListener("error", (error) => {
  console.log(error);
});
