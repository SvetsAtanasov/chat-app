import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type CustomNavItemProps = {
  icon: IconProp;
  to?: string;
  onClick?: () => void;
};

const NavItem = ({ icon, to, onClick }: CustomNavItemProps) => {
  return (
    <li className="nav-item">
      {to ? (
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={to}
        >
          <FontAwesomeIcon icon={icon} />
        </NavLink>
      ) : (
        <FontAwesomeIcon onClick={onClick} icon={icon} />
      )}
    </li>
  );
};

export default NavItem;
