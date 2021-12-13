import AboutText from "../components/AboutTexts/AboutText";
import EkoText from "../components/EkoText";
import { Container, Row, Col } from "react-bootstrap";
import bakgrund1 from "../Images/back-index.png";

const Home = () => {
  return (
    <Container
      fluid
      className="  data-container p-5 "
      style={{ backgroundImage: `url(${bakgrund1})` }}
    >
    
      <Col
        sm={{ span: 8, offset: 2 }}
        lg={{ span: 6, offset: 3 }}
        className=" mt-4 pt-5"
      >
        <Row className="home-about p-4 p-md-5 mt-5">
          <AboutText />
          <EkoText />
        </Row>
      </Col>
    </Container>
  );
};
export default Home;
