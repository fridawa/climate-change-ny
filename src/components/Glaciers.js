//externa importer
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Slider } from "@mui/material";

//interna importer
import glaciers from "../Images/4-is.png";
import Menu from "./menu";
import Logo from "./Logo";
import ModalFootprint from "./ModalFootprint";
import ModalGlacier1 from "./ModalGlacier1";
import ModalGlacier2 from "./ModalGlacier2";
import EkoText from "./ekoText";

const Co2 = () => {
  const initialSize = 400;
  const [ballSize, setBallSize] = useState(initialSize);
  const [fetchedData, setFetchedData] = useState([]);
  const [year, setYear] = useState(1955);
  const [modalFootprintShow, setModalFootprintShow] = useState(false);
  const [modalGlacier1, setModalGlacier1] = useState(false);
  const [modalGlacier2, setModalGlacier2] = useState(false);

  // Bara att byta ut .json/co2.json till HTTPS
  useEffect(() => {
    axios
      .get("./json/ice.json")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Uppdaterar årtal i year
  // uppdaterar bollen storlek
  const handleChange = (e) => {
    setYear(e.target.value);
    setBallSize(e.target.value * 0.2);
  };

  //matchar tidslinjen med API:t
  // och skriver ut detta
  const match = fetchedData.map((n) => {
    if (n.Year === year) {
      console.log("Året matchar!!");
      return (
        <>
          <Container className="printData">
            <Row>
              <Col>
                <p className="fw-bold mb-0">År</p>
                <p>{n.Year}</p>

                <p className="fw-bold mb-0">
                  Medelmassa{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalGlacier1(true)}
                    ></i>
                  </sup>
                </p>
                <ModalGlacier1
                  show={modalGlacier1}
                  onHide={() => setModalGlacier1(false)}
                />
                <p>
                  {" "}
                  {n["Mean cumulative mass balance"]} meter (vattenekvivalent)
                </p>
                <p className="fw-bold mb-0">
                  Antal observerade glaciärer{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalGlacier2(true)}
                    ></i>
                  </sup>
                </p>
                <ModalGlacier2
                  show={modalGlacier2}
                  onHide={() => setModalGlacier2(false)}
                />
                <p>{n["Number of observations"]}</p>
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
        <Row className="justify-content-center ">
          <div className="smaller-menu mt-3 test-menu ">
            <Menu />
          </div>
        </Row>
        <Row>
          <Col sm={6}>
            <Container className="symbolHolder d-none d-sm-block">
              <div className=" d-flex justify-content-center align-items-center">
                <img
                  src={glaciers}
                  style={{ "--size": ballSize }}
                  className="ball"
                  alt="ball"
                />
              </div>
            </Container>
          </Col>
          <Col sm={6} className="containerData">
            <h1>Glaciärstorlek</h1>
            <p>
              Jordens temperatur ökar och då smälter glaciärerna. Detta påverkar
              isbjörnar och sälar, då de är beroende av isen.
              <EkoText />
            </p>
            <div className="d-none d-sm-block">{match}</div>
          </Col>
        </Row>

        <Slider
          aria-label="Always visible"
          defaultValue={year}
          min={fetchedData.length > 0 ? fetchedData[0].Year : 0}
          max={
            fetchedData.length > 0
              ? fetchedData[fetchedData.length - 1].Year
              : 0
          }
          step={1}
          marks={false}
          valueLabelDisplay="on"
          onChange={handleChange}
        />
        <div className="d-sm-none">{match}</div>
      </Container>
    </>
  );
};
export default Co2;
