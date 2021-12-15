import { Button, Modal, Col, Row } from "react-bootstrap";
import AboutEldning from "../AboutTexts/AboutGasFlaring";

const ModalEldning = (props) => {
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
            <AboutEldning />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalEldning;
