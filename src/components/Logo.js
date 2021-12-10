import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";

import backindex from "../Images/back-index.png";

const Logo = () => {
  return (
    <div className="logo-container ">
      <NavLink to="/">
        <img src={logo} className="app-logo" />
      </NavLink>
    </div>
  );
};
export default Logo;
