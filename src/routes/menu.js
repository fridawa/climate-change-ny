import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import navLinksCo2 from "./navlinksco2";
import navLinks from "./navLinks";
import co2img from "../Images/menu-co2.png";

const Menu = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center p-0 navbar-climate"
      >
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Container>
            <Col md={3}>
              <Navbar.Brand href="#/" className="d-flex">
                <Logo />
              </Navbar.Brand>
            </Col>
            <Col md={9}>
              <Navbar.Toggle aria-controls="responsive-navbar-nav " />
              <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="m-auto pe-5 align-middle d-flex">
                  <NavDropdown
                    title={
                      <>
                        <img
                          src={co2img}
                          style={{ width: 20, height: 20 }}
                        ></img>
                        <p>Co2</p>
                      </>
                    }
                    id="nav-dropdown"
                    className="d-flex"
                  >
                    {" "}
                    <NavDropdown.Item eventKey="4.1">
                      {navLinksCo2.map(({ title, path }) => (
                        <NavLink to={path} key={title} className=" ps-3 ">
                          <p>{title}</p>
                        </NavLink>
                      ))}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="ps-3 pe-3 d-flex">
                    {navLinks.map(({ title, path, img }) => (
                      <NavLink
                        to={path}
                        key={title}
                        className="d-flex flex-row ps-5 "
                      >
                        <img src={img} style={{ width: 20, height: 20 }}></img>
                        <p>{title}</p>
                      </NavLink>
                    ))}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Menu;
