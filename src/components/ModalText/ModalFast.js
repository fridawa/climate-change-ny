import { Button, Modal, Col, Row } from "react-bootstrap";
import AboutFast from "../AboutTexts/AboutSolidFuelText";

const ModalFast = (props) => {
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
            <AboutFast />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFast;
