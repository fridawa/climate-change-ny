import { Modal, Col, Row } from "react-bootstrap";
import Match from "../InfoText";
import ShowMoreText from "react-show-more-text";

const ModalGlobalTemp = (props) => {
  function executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  console.log(props.id);
  const idkey = props.id;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              onClick={() => executeOnClick()}
              expanded={false}
              width={280}
              truncatedEndingComponent={"... "}
            >
              <Match id={idkey} />
            </ShowMoreText>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default ModalGlobalTemp;
