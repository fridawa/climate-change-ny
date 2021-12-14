import { Button, Modal, Col, Row } from "react-bootstrap";
import FilterYears from "../screens/FilterYear";
import Table from "../screens/TableYears"

const ModalSearch = () => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
         <FilterYears />
         <Table />
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalSearch;
