//externa importer
import { Container, Row, Col } from "react-bootstrap";

//interna importer
import Menu from "./menu";
import Logo from "./Logo";
import AboutText from "./AboutText";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row className="logo-big">
          <Logo />
        </Row>
        <Row className="justify-content-center">
          <div className="mt-5 home-menu">
            <Menu />
          </div>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="about-text">
            <AboutText />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
