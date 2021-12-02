import { Button, Modal } from "react-bootstrap";

const ModalCo6 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Gasbränsle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>Gasbränsle innefattar bränslen i gasform. </p>
        <p>
        Exempel på gasbränslen är till exempel fordonsgas vilket är ett drivmedel som består av biogas, naturgas eller kombinationer av de båda.
       </p>
       <p> Biogas är ett förnybart bränsle som ger mycket mindre utsläpp av koldioxid än bensin och diesel </p>
       <p>Naturgas är ett fossilt (icke förnybart) bränsle som utvinns ur olja. Att köra bil på naturgas ger större utsläpp av växthusgaser än biogas men lägre än bensin och diesel.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCo6;
