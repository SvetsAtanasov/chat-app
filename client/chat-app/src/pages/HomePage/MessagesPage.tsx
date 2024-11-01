import List from "../../components/List/List";
import { Avatar } from "../../components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MessagesPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("http://localhost:8888/users");
      const data = await res.json();

      setUsers(data.users);
    };

    getUsers();
  }, []);

  return (
    <>
      <List
        list={users}
        renderItem={(user: { email: string }) => (
          <li onClick={() => navigate(`/messages/${user.email}`)}>
            <Avatar />
            <span>{user.email}</span>
          </li>
        )}
      />
    </>
  );
};

export default MessagesPage;
