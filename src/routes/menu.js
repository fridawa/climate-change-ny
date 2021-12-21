// import libraies
import { Container, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//import components
import Logo from "../components/Logo";
import navLinksCo2 from "./navlinksco2";
import navLinks from "./navLinks";
import co2img from "../Images/menu-co2.png";

// the standars Menu component, found in the App.js
// containing navlinks (images and lables) to all of the views via paths
// the Co2 nav is a dropdown, containing the Co2 subnavs
const Menu = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center p-md-0 navbar-climate d-none d-md-block "
      >
        <Navbar
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
          className="pt-4"
        >
          <Container>
            <Col md={4}>
              <Navbar.Brand href="#/" className="d-flex ">
                <Logo />
              </Navbar.Brand>
            </Col>
            <Col md={8}>
              <Navbar.Toggle aria-controls="responsive-navbar-nav " />
              <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="m-xs-0 p-xs-0 ms-md-auto pe-md-4 d-flex">
                  <NavDropdown
                    title={
                      <>
                        <img
                          className="d-inline "
                          src={co2img}
                          style={{ width: 40, height: 40 }}
                          alt="Co2"
                        ></img>

                        <p className="d-inline  align-middle ">Co2</p>
                      </>
                    }
                    id="nav-dropdown"
                    className="p-md-0 m-md-0 pt-md-1"
                  >
                    <NavDropdown.Item eventKey="4.1">
                      {navLinksCo2.map(({ title, path }) => (
                        <NavLink
                          to={path}
                          key={title}
                          className=" ps-3"
                          activeclassname="active"
                        >
                          {/* försöker style menyn*/}
                          <p>{title}</p>
                        </NavLink>
                      ))}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="p-xs-0 m-xs-0 ps-md-3 pe-md-3 pt-md-1 d-flex">
                    {navLinks.map(({ title, path, img }) => (
                      <NavLink
                        to={path}
                        key={title}
                        className="d-flex flex-row ps-5 "
                        activeclassname="active"
                      >
                        <img
                          src={img}
                          style={{ width: 40, height: 40 }}
                          alt={title}
                        ></img>
                        <p className="align-self-center ">{title}</p>
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
