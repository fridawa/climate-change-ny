//import libraries
import { NavLink } from "react-router-dom";

//import components
import logo from "../Images/logo.png";

//The logotype component, shown in the left upper corner
//Contains the Logo image from the Images folder
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
