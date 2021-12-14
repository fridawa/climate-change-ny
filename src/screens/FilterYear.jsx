import { useState } from "react";
import { Row, Col, Button, Form, Container } from "react-bootstrap";

const FilterYears = (props) => {
  const [YearFrom, setYearFrom] = useState();
  const [YearTo, setYearTo] = useState();
  const [Order, setYearOrder] = useState("LTH");
  

  const handleYearOrder = (e) => {
    setYearOrder(e.target.value);
  };
  return (
    <>
    <Container>
      <Row>
        <Col sm={3}>
          <div className="">
            <Form.Label>Från år </Form.Label>
            <input
              type="text"
              placeholder="Vilket år vill du söka från?"
              style={{  }}
              onChange={(e) => setYearFrom(e.target.value)}
              value={YearFrom}
            ></input>
            
          </div>
        </Col>
        <Col sm={3}>
          <div className="">
            <Form.Label>Till år</Form.Label>
            <input
              type="text"
              placeholder="Vilket år vill du söka till?"
              onChange={(e) => setYearTo(e.target.value)}
              value={YearTo}
            ></input>
            
          </div>
        </Col>
        <Col sm={3}>
          <div>
            <input
              type="radio"
              value="LTH"
              name="rdo"
              style={{  }}
              onChange={handleYearOrder}
              checked={Order === "LTH"}
            ></input>
            Ordna lågt till högt
            <input
              type="radio"
              value="HTL"
              name="rdo"
              style={{ marginLeft: "30px" }}
              onChange={handleYearOrder}
              checked={Order === "HTL"}
            ></input>
            Ordna högt till lågt
          </div>
        </Col>
        <Col sm={1}>
          <Button
            variant="primary"
            onClick={() => props.onYearFilter(YearFrom, YearTo, Order)}
          >
            Filtrera
          </Button>
        </Col>
      </Row>
      </Container>
    </>
  );
};
export default FilterYears;