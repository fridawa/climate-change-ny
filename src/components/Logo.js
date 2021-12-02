//interna importer
import logo from "../Images/logo.png";

//externa importer
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Logo = () => {
  return (
    <>
      <div className="logo-wrapper d-flex justify-content-center ps-4 pe-4">
        <Link to="/">
          <img src={logo} className="app-logo mt-4" alt="logo" />
        </Link>
      </div>
    </>
  );
};
export default Logo;
