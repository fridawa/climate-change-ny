import { useState } from "react";
import { Row, Col, Button, Form, Container } from "react-bootstrap";

const FilterYears = (props) => {

  const [YearFrom, setYearFrom] = useState();
  const [YearTo, setYearTo] = useState();
  const [Order, setYearOrder] = useState("LTH");
  
// beroende på värdet från input från checkbox ändras ordningen på den printade datan
  const handleYearOrder = (e) => {
    setYearOrder(e.target.value);
  };

  // Modalens innehåll med förklarande text, inputfält, radioknappar och "filter"-knapp
  // onChange (setYearFrom, setYearto) fångar värdet på input och uppdaterar useState
  // handleYearOrder sätter ordningen på datan, dvs LTH (LÅGT TILL HÖGT) eller HTL (HÖGT TILL LÅGT)
  // knappfunktionen tar props (datan) och filtrerar denna baserat på useState för YearTo, YearFrom och Order
  return (
    <>
    <Container>
      <Row style= {{marginLeft:" -1.5em", marginBottom: "", marginTop: "1em"}}>
        <Col sm={2}>
          <div className="">
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
          <div className="">
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

          <Button 
          style={{marginTop: "1.8em", backgroundColor:"#83a9cf", border:"none"}}
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