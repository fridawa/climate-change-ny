import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";

const Logo = () => {
  return (
    <div className="logo-container ">
      <NavLink to="/">
        <img src={logo} className="app-logo" alt="Logotyp" />
      </NavLink>
    </div>
  );
};
export default Logo;
