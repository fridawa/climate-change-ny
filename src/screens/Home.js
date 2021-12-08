import AboutText from "../components/AboutText";
import EkoText from "../components/EkoText";
import bakgrund1 from "../Images/back-index.png";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      fluid
      className="data-container p-5"
      style={{ backgroundImage: `url(${bakgrund1})` }}
    >
      <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
        <Row className="home-about p-5">
          <AboutText />
          <EkoText />
        </Row>
      </Col>
    </Container>
  );
};
export default Home;
