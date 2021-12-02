//interna importer
import sol from "../Images/sol-2.png";
import co2 from "../Images/co2-2.png";
import hav from "../Images/hav-2.png";
import is from "../Images/is-2.png";

import { Container, Row, Col } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Container fluid className="ps-5 pe-5 menu">
        <Row xs={12} className="d-flex align-items-center  ">
          <Col xs={3} className="p-2 ">
            <NavLink
              to="/global-temp"
              activeClassName="active"
              activeClassName="active"
              className="menu-item d-flex justify-content-center"
            >
              <img src={sol} className="menu-img" alt="sol" />
            </NavLink>
          </Col>
          <Col xs={3} className="p-2">
            <NavLink
              to="/co2"
              activeClassName="active"
              activeClassName="active"
              className="menu-item d-flex justify-content-center"
            >
              <img src={co2} className="menu-img" alt="co2" />
            </NavLink>
          </Col>
          <Col xs={3} className="p-2">
            <NavLink
              to="/ocean-levels"
              activeClassName="active"
              activeClassName="active"
              className="menu-item d-flex justify-content-center"
            >
              <img src={hav} className="menu-img" alt="hav" />
            </NavLink>
          </Col>
          <Col xs={3} className="p-2">
            <NavLink
              to="/glaciers"
              activeClassName="active"
              activeClassName="active"
              className="menu-item d-flex justify-content-center"
            >
              <img src={is} className="menu-img" alt="glaciär" />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
