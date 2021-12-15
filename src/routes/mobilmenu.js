import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import navLinksCo2 from "./navlinksco2";
import navLinks from "./navLinks";
import co2img from "../Images/menu-co2.png";

const MobilMenu = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center p-md-0 navbar-climate d-md-none"
      >
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Container className="align-items-start">
            <Col xs={4}>
              <Navbar.Brand href="#/">
                <Logo />
              </Navbar.Brand>
            </Col>
            <Col xs={8}>
              <Nav className="me-auto">
                <Row>
                  <Col xs={3} className="dropdown-menu-mobil me-3 ps-5 pt-2 ">
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="m-0 p-0 egen-btn"
                      >
                        <img
                          src={co2img}
                          style={{ width: 35, height: 35 }}
                        ></img>{" "}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {navLinksCo2.map(({ title, path }) => (
                          <Dropdown.Item eventKey="4.1">
                            <NavLink
                              to={path}
                              key={title}
                              activeClassName="active"
                            >
                              <p>{title}</p>
                            </NavLink>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col xs={8} className="p-0">
                    <Nav.Link>
                      {navLinks.map(({ title, path, img }) => (
                        <NavLink
                          to={path}
                          key={title}
                          activeClassName="active"
                          className="ps-2"
                        >
                          <img
                            src={img}
                            style={{ width: 35, height: 35 }}
                          ></img>
                        </NavLink>
                      ))}
                    </Nav.Link>
                  </Col>
                </Row>
              </Nav>
            </Col>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default MobilMenu;
