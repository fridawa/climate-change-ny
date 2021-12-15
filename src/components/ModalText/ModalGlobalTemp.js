import { Button, Modal, Col, Row } from "react-bootstrap";
import AboutGlobalTempText from "../AboutTexts/AboutGlobalTempText";

const ModalGlobalTemp = (props) => {
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
            <AboutGlobalTempText />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalGlobalTemp;
