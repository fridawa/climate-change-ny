import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import co2img from "../Images/co2-2.png";
import havimg from "../Images/hav-2.png";
import solimg from "../Images/sol-2.png";
import isimg from "../Images/is-2.png";

const Menu = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center p-0 navbar-climate"
      >
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="ps-3 pe-3">
                  <NavLink to="/global-temp">
                    <p>Global Temp</p>
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="ps-3 pe-3">
                  <NavLink to="/co2">
                    <p>Co2</p>
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="ps-3 pe-3">
                  <NavLink to="/ocean-levels">
                    <p>Hav</p>
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="ps-3 pe-3">
                  <NavLink to="/glaciers">
                    <p>Glaciär</p>
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Menu;
