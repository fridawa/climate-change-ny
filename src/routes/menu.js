import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from "../components/Logo";
import co2img from "../Images/menu-co2.png";
import havimg from "../Images/menu-ocean.png";
import solimg from "../Images/menu-globaltemp.png";
import isimg from "../Images/menu-glaciers.png";
import { height } from "@mui/system";

const navLinks = [
  {
    id: 1,
    title: "Global Temp",
    path: "/global-temp",
    img: `${solimg}`,
  },
  {
    id: 2,
    title: `Co2`,
    path: `/co2`,
    img: `${co2img}`,
  },
  {
    id: 3,
    title: `Havsnivå`,
    path: `/ocean-levels`,
    img: `${havimg}`,
  },
  {
    id: 4,
    title: `Glaciär`,
    path: `/glaciers`,
    img: `${isimg}`,
  },
];
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
                <Nav className="ms-auto">
                  <Nav.Link className="ps-3 pe-3 d-flex">
                    {navLinks.map(({ title, path, img }) => (
                      <NavLink
                        to={path}
                        key={title}
                        // activeStyle={{
                        //   backgroundImage: `url(${bgI})`,
                        //   backgroundSize: "cover",
                        //   backgroundRepeat: "no-repeat",
                        // }}
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
