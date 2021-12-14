import { Button, Modal, Col, Row } from "react-bootstrap";

const ModalCo2 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Koldioxidutsläpp
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <p>
              CO2 står för koldioxid. Det är utsläpp från till exempel bilar,
              tåg, flygplan. CO2 finns också vid tillverkning av elektronik och
              livsmedel. Utsläppen mäts i miljoner ton (förkortning MT)
            </p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCo2;
