import {
  faHouse,
  faCog,
  faMessage,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

import NavItem from "./NavItem";
import { useAuth } from "../../context/AuthProvider/AuthProvider";

const SideNav = () => {
  const { handleLogout } = useAuth();

  return (
    <ul className="side-nav">
      <NavItem to="/home" icon={faHouse} />
      <NavItem to="/messages" icon={faMessage} />
      <NavItem to="/settings" icon={faCog} />
      <NavItem onClick={handleLogout} icon={faDoorOpen} />
    </ul>
  );
};

export default SideNav;
