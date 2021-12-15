import { Button, Modal, Col, Row } from "react-bootstrap";
import AboutCo2Text from "../AboutTexts/AboutCo2Text";

const ModalCo2 = (props) => {
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
            <AboutCo2Text />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalCo2;
