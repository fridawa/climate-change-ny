import { Modal, Col, Row } from "react-bootstrap";
import Match from "../InfoText";

const ModalGlobalTemp = (props) => {
  console.log(props.id);
  const idkey = props.id;
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
            <Match id={idkey} />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalGlobalTemp;
