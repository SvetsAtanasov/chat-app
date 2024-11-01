import { ChangeEvent, useEffect, useState } from "react";

import Input from "../Input/Input";
import ChatTopBar from "./ChatTopBar/ChatTopBar";
import MessagesList from "./MessagesList/MessagesList";

const Chat = () => {
  const email = JSON.parse(localStorage.getItem("email") || "");
  const [message, setMessage] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setMessage(value);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8888");

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "REGISTER", email }));
    };

    ws.onmessage = (event) => {
      console.log("Message from server:", event.data);
    };

    ws.onclose = () => {
      console.log("Disconnected");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => ws.close();
  }, []);

  return (
    <div className="chat">
      <ChatTopBar />

      <MessagesList />

      <Input
        placeholder="Type your message here"
        value={message}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Chat;
