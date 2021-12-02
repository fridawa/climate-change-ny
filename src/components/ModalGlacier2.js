import { Button, Modal } from "react-bootstrap";

const ModalGlacier2 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Antal observationer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Antal observerade ”referensglaciärer" som användes för mätning över hela världen. Medelmass-värdet representerar genomsnittet av alla glaciärer som mättes under året. </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalGlacier2;
