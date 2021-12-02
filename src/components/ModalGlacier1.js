import { Button, Modal } from "react-bootstrap";

const ModalGlacier1 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Medelmassa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Medelmassan mäts i meter vattenekvivalenter, vilket representerar förändringar i en glaciärs genomsnittliga tjocklek. Värdet visar genomsnittlig massa för "referensglaciärer" över hela världen för det valda året. 
</p>
<p>
Massbalansen är ett resultat av glaciärens årliga snötillkomst och snöförlust. Om glaciären är i jämvikt med sitt klimat har den massbalansvärdet noll, vilket innebär att lika mycket snö försvinner som det tillkommer under året. </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalGlacier1;
