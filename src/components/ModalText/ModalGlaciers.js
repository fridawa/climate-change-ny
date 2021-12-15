import { Button, Modal, Col, Row } from "react-bootstrap";
import AboutGlaciersText from "../AboutTexts/AboutGlaciers";

const ModalGlaciers = (props) => {
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
            <AboutGlaciersText />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalGlaciers;
