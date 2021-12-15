import { Button, Modal, Col, Row } from "react-bootstrap";
import AboutCement from "../AboutTexts/AboutCement";

const ModalCement = (props) => {
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
            <AboutCement />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalCement;
