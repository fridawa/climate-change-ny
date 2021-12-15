import { Button, Modal, Col, Row } from "react-bootstrap";
import AboutOceanText from "../AboutTexts/AboutOceanLevelsText";

const ModalOcean = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <AboutOceanText />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalOcean;
