//import libraries
import { useState } from "react";
import { Row, Col, Button, Form, Container } from "react-bootstrap";

// Component that allows the user to input years and filter data. Is shown in each ModalFilterYears
const FilterYears = (props) => {

  const [YearFrom, setYearFrom] = useState();
  const [YearTo, setYearTo] = useState();
  const [Order, setYearOrder] = useState("LTH");
  
// depending on which radio button is clicked, the order of the data will be changed
  const handleYearOrder = (e) => {
    setYearOrder(e.target.value);
  };

  // Contains the content of the modal
  // onChange (setYearFrom, setYearto), the value is captured and the useState updated
  // handleYearOrder sets the order - LTH (Low to High) or HTL (High to Low)
  // the button takes props (data) and filter it beased on useState for YearTo, YearFrom och Order
  return (
    <>
    <Container>
      <Row style= {{marginLeft:" -1.5em", marginBottom: "", marginTop: "1em"}}>
        <Col sm={2}>
          <div>
          {/* form for "year from" */}
            <Form.Label>Från år </Form.Label>
            <input
            class="form-control" 
              type="text"
              placeholder="År..."
              style={{  }}
              onChange={(e) => setYearFrom(e.target.value)}
              value={YearFrom}
            ></input>
          </div>
        </Col>

        <Col sm={2} style= {{}}>
          <div>
          {/* form for "year from"*/}
            <Form.Label>Till år</Form.Label>
            <input 
            class="form-control" 
              type="text"
              placeholder="År..."
              onChange={(e) => setYearTo(e.target.value)}
              value={YearTo}
            ></input>
          </div>
        </Col>
        
        <Col sm={3} style= {{marginLeft: "-1em"}}>
          <div style= {{marginTop: "1.5em"}}>
          {/*Radio Button LTH*/}
          <div class="form-check">
            <input
              type="radio"
              value="LTH"
              name="rdo"
              style={{  }}
              onChange={handleYearOrder}
              checked={Order === "LTH"}
            ></input>
            {" "}Ordna lågt till högt
            </div>
            {/*Radio Button HTL*/}
            <div class="form-check">
            <input
              type="radio"
              value="HTL"
              name="rdo"
              style={{color: "black"}}
              onChange={handleYearOrder}
              checked={Order === "HTL"}
            ></input>
            {" "}Ordna högt till lågt
            </div>
          </div>
        </Col>
        <Col >

       {/*"button that triggers the filter funtion and returns the input years and selected order "*/}
          <Button 
          className="filterButton"
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