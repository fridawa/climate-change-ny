import { Button, Modal } from "react-bootstrap";

const ModalCo3 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Flytande bränsle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Flytande bränsle innefattar bränslen i flytande form.
        </p>
        <p>
        Exempel på flytande bränslen är till exempel etanol, bensin eller diesel med mera.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCo3;
