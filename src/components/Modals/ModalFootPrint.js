// import libraries
import { Modal, Col, Row } from "react-bootstrap";

// the ModalFootprint is shown on click on "ekologiska fotavtryck" in the EkoText component
const ModalFootprint = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ekologiskt fotavtryck
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <p>
              Ekologisk fotavtryck handlar om hur mycket resurser en person
              (eller land) förbrukar.
            </p>
            <p>
              Du och din familj kan påverka ert egna fotavtryck genom att:
              <ul>
                <li>Åka kollektivt (tåg, buss) istället för att ta bilen</li>
                <li>Äta mindre kött</li>
                <li>Använda mindre el hemma</li>
                <li>Shoppa mindre och slänga mindre mat</li>
              </ul>
            </p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalFootprint;
