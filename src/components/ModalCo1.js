import { Button, Modal } from "react-bootstrap";

const ModalCo1 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Per capita</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Per capita är latin och betyder "per person". </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCo1;
