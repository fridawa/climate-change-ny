import { Container, Row, Col, Navbar, Nav, Dropdown } from "react-bootstrap";
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
          <Container fluid className="align-items-start">
            <Col xs={6}>
              <Navbar.Brand href="#/">
                <Logo />
              </Navbar.Brand>
            </Col>
            <Col xs={6}>
              <Nav className="me-auto mobil-menu-img">
                <Row>
                  <Col
                    xs={2}
                    className="dropdown-menu-mobil ps-0 pe-0 pt-2 mt-0 "
                  >
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="m-0 p-0 egen-btn"
                      >
                        <img
                          src={co2img}
                          style={{ width: 35, height: 35 }}
                          alt="Co2"
                        ></img>{" "}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {navLinksCo2.map(({ title, path }) => (
                          <Dropdown.Item eventKey="4.1">
                            <NavLink
                              to={path}
                              key={title}
                              activeclassname="active"
                            >
                              <p>{title}</p>
                            </NavLink>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col xs={10} className="p-0">
                    <Nav.Link>
                      {navLinks.map(({ title, path, img }) => (
                        <NavLink
                          to={path}
                          key={title}
                          activeclassname="active"
                          className=""
                        >
                          <img
                            src={img}
                            style={{ width: 35, height: 35 }}
                            className="ms-3"
                            alt={title}
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
