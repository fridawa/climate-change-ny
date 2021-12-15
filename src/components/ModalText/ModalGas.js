import { Button, Modal, Col, Row } from "react-bootstrap";
import AboutGas from "../AboutTexts/AboutGas";

const ModalGas = (props) => {
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
            <AboutGas />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalGas;
