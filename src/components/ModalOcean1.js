import { Button, Modal } from "react-bootstrap";

const ModalOcean1 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Global medelhavsnivå</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Havsnivån, eller havsytan, är den nollpunkt som man refererar till i angivelser om höjder, till exempel meter över havet. Havsnivån kan påverkas av flera olika faktorer, både över kortare och längre tidsperioder.
<br/>Den globala vattennivån stiger på grund av det allt varmare klimatet som leder till att glaciärer och inlandsisar smälter, samtidigt som havets volym vidgas då varmare vatten tar större plats än kallare.
</p>
<p>Effekter av havsnivåhöjningen är högre stormvågor, farligare tsunamier, befolkningsförflyttningar, förlust och nedbrytning av jordbruksmark och skador i städer. </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalOcean1;
