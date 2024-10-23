import { ChangeEvent, useState } from "react";

import Input from "../Input/Input";
import ChatTopBar from "./ChatTopBar/ChatTopBar";
import MessagesList from "./MessagesList/MessagesList";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setMessage(value);
  };

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
