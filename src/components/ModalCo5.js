import { Button, Modal } from "react-bootstrap";

const ModalCo5 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Gasfackling</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Gasfackling används i industrier där gas blir en biprodukt vid tillverkning av något annat. 
        </p><p>Gasfacklingsprocessen sker oftast enbart för att elda upp gasen. Värmeenergin tas alltså inte tillvara på.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCo5;
