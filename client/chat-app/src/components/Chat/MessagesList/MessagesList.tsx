import List from "../../List/List";

const MessagesList = () => {
  const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 24, 4, 56, 6, 7, 8, 9, 3, 4, 52, 5, 23,
    623, 5, 32,
  ];

  return (
    <div className="messages-list">
      <List renderItem={(item) => <li>{item}</li>} list={list} />
    </div>
  );
};

export default MessagesList;
