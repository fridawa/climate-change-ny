import { Button, Modal, Col, Row } from "react-bootstrap";
import AboutLiquid from "../AboutTexts/AboutLiquidFuelText";

const ModalLiquid = (props) => {
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
            <AboutLiquid />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalLiquid;
