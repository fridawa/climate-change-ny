import { NavLink } from "react-router-dom";
import logo from "../Images/logo1.png";
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
