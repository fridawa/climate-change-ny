import { Button, Modal } from "react-bootstrap";

const ModalGlobalTemp = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Global temperatur
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Genomsnittlig mätt temperatur i världen under det valda året, angivet i Celsius.</p>
        <p>Vid en kraftig temperaturökning startar jorden egna processer vilka förvärrar uppvärmningen ännu mer. Dessa kallas för feedbackloops. Högre globala temperaturer bidrar till exempel till att det blir mer vattenånga i atmosfären. Detta förstärker uppvärmningen ytterligare eftersom vattenånga fungerar som en växthusgas.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalGlobalTemp;
