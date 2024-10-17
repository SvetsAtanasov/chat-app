import {
  faHouse,
  faCog,
  faMessage,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

import NavItem from "./NavItem";

const SideNav = () => {
  return (
    <ul className="side-nav">
      <NavItem to="/home" icon={faHouse} />
      <NavItem to="/messages" icon={faMessage} />
      <NavItem to="/settings" icon={faCog} />
      <NavItem onClick={() => console.log("test")} icon={faDoorOpen} />
    </ul>
  );
};

export default SideNav;
