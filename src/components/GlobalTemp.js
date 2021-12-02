//externa importer
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Slider } from "@mui/material";

//interna importer
import sol from "../Images/4-sol.png";
import Menu from "./menu";
import Logo from "./Logo";
import ModalFootprint from "./ModalFootprint";
import ModalGlobalTemp from "./ModalGlobTemp";
import EkoText from "./ekoText";

const GlobalTemp = () => {
  const initialSize = 400;
  const [ballSize, setBallSize] = useState(initialSize);
  const [fetchedData, setFetchedData] = useState([]);
  const [year, setYear] = useState(1955);
  // Bildstorleken
  let [lastNum, setLastNum] = useState(0);
  // Modalerna
  const [modalTempShow, setModalTempShow] = useState(false);

  const [modalFootprintShow, setModalFootprintShow] = useState(false);

  // Bara att byta ut .json/co2.json till HTTPS
  useEffect(() => {
    axios
      .get("./json/temp.json")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Uppdaterar årtal i year
  // uppdaterar bollen storlek
  const handleChange = (e) => {
    setYear(e.target.value);
    // // setBallSize(e.target.value * 0.2);
    // const previousYear = e.target.value
    // setBallSize(
    //   if(previousYear > e.target.value){ballSize + 20});
  };

  //Borde kanske funka bättre om man specificerar
  // ett min och max value för lastNum.
  const checkValue = (e) => {
    let value = e.target.value;
    if (lastNum < value) {
      console.log(lastNum);
      console.log("increasing");
      setBallSize(ballSize + 5);
    } else {
      console.log("decreasing");
      setBallSize(ballSize - 5);
      console.log(lastNum);
    }
    setLastNum(value);

    console.log(lastNum);
  };

  // const onChange = (e) => {
  //   console.log("onChange: " + e.target.value);
  // };
  //matchar tidslinjen med API:t
  // och skriver ut detta
  const match = fetchedData.map((n) => {
    if (n.Year === year && n.Source == "GCAG") {
      console.log(n);

      return (
        <>
          <Container className="printData">
            <Row>
              <Col>
                <p className="fw-bold mb-0">År</p>
                <p>{n.Year}</p>
                <p className="fw-bold mb-0">
                  Global Temperatur{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalTempShow(true)}
                    ></i>
                  </sup>
                </p>
                <ModalGlobalTemp
                  show={modalTempShow}
                  onHide={() => setModalTempShow(false)}
                />
                <p>
                  {n["Mean"]} enligt {n.Source} mätning
                </p>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      return null;
    }
  });

  // Innehållet på sidan med bild, text, tidlinje
  return (
    <>
      <Container fluid>
        <Row className="logo-small ">
          <Logo />
        </Row>
        <Row className="justify-content-center">
          <div className="smaller-menu mt-3 test-menu">
            <Menu />
          </div>
        </Row>
        <Row>
          <Col sm={6}>
            <Container className="symbolHolder d-none d-sm-block">
              <div className=" d-flex justify-content-center align-items-center">
                <img
                  src={sol}
                  style={{ "--size": ballSize }}
                  className="ball"
                  alt="ball"
                />
              </div>
            </Container>
          </Col>
          <Col sm={6} className="containerData ">
            <h1>Global Temperatur</h1>
            <p>
              Klimatförändringarna gör så att jordens temperatur ökar.
              <EkoText />
            </p>
            <div className="d-none d-sm-block">{match}</div>
          </Col>
        </Row>

        {/* Behöver byta håll på årtalen i arrayen för
        slidern vill inte köra en bakvänd tidlinje 
        Detta bör kunna göras i en egen const likt i OceanLevels */}
        <Slider
          aria-label="Always visible"
          defaultValue={year}
          min={
            fetchedData.length > 0
              ? fetchedData[fetchedData.length - 1].Year
              : 0
          }
          max={fetchedData.length > 0 ? fetchedData[0].Year : 0}
          step={1}
          marks={false}
          valueLabelDisplay="on"
          onChange={checkValue}
          // onChange={onChange}
        />
        <div className="d-sm-none"> {match}</div>
      </Container>
    </>
  );
};
export default GlobalTemp;
