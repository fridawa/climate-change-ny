import { Button, Modal } from "react-bootstrap";

const ModalCo4 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Fast Bränsle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>Fast bränsle innefattar bränslen i fast form. 
        </p>
        <p>
        Exempel på fasta bränslen är till exempel ved, pellets, briketter, spån, kol, torv med mera.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCo4;
