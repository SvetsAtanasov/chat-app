import Avatar from "../../Avatar/Avatar";
import Box from "../../Box/Box";

const ChatTopBar = () => {
  console.log("test");
  return (
    <div className="chat-top-bar">
      <Avatar />
      <Box flexDirection="column" justifyContent="center" margin="0 0 0 10px">
        <span>Name</span>
        <span>Online - Last seen, 2.02pm</span>
      </Box>
    </div>
  );
};

export default ChatTopBar;
