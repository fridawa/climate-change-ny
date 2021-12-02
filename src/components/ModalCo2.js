import { Button, Modal } from "react-bootstrap";

const ModalCo2 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cementproduktion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Cementproduktion är processen som sker när cement tillverkas. </p>
<p>
Cementindustrin har en stor negativ klimatpåverkan. Cement- och betongproduktion står för åtta procent av världens samlade koldioxidutsläpp.
</p><p>
Cement återvinns ur kalksten. Sprickor i kalkstenen kan leda till effekter på grundvattnets rörelser och saltvattenläckor. Detta kan förstöra både dricksvattnet i området och vattenbalansen för växter och natur.
</p>
<p>
Brytning av kalksten till cementproduktionen är också den dålig för klimatet, eftersom en kalkrik berggrund ofta leder till värdefulla naturmiljöer och djurliv.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCo2;
