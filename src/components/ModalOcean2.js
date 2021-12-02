import { Button, Modal } from "react-bootstrap";

const ModalOcean2 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Osäkerhet i havsnivåmätning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Den globala havsnivåmätningen baseras på en sammanslagen kombination av långtidsmätningar genom både mätning i havet och mätning med satellit. På grund av rekonstruktion kan nivån avvika några millimeter. </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalOcean2;
