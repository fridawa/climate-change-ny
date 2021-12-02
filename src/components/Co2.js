//externa importer
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

import { Slider } from "@mui/material";

//interna importer
import co2 from "../Images/4-co2.png";
import Menu from "./menu";
import Logo from "./Logo";
import ModalFootprint from "./ModalFootprint";
import ModalCo1 from "./ModalCo1";
import ModalCo2 from "./ModalCo2";
import ModalCo3 from "./ModalCo3";
import ModalCo4 from "./ModalCo4";
import ModalCo5 from "./ModalCo5";
import ModalCo6 from "./ModalCo6";
import EkoText from "./ekoText";

const Co2 = () => {
  const initialSize = 400;
  const [ballSize, setBallSize] = useState(initialSize);
  const [fetchedData, setFetchedData] = useState([]);
  const [year, setYear] = useState(1955);

  const [modalFootprintShow, setModalFootprintShow] = useState(false);

  const [modalCo1, setModalCo1] = useState(false);
  const [modalCo2, setModalCo2] = useState(false);
  const [modalCo3, setModalCo3] = useState(false);
  const [modalCo4, setModalCo4] = useState(false);
  const [modalCo5, setModalCo5] = useState(false);
  const [modalCo6, setModalCo6] = useState(false);

  // Bara att byta ut .json/co2.json till HTTPS
  useEffect(() => {
    axios
      .get("./json/co2.json")
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
              <Col xs={6} md={4}>
                <p className="fw-bold mb-0 p-rubrik">År</p>
                <p>{n.Year}</p>
              </Col>
              <Col>
                <p className="fw-bold mb-0 p-rubrik">
                  Sammanlagd CO2-utsläpp:{" "}
                </p>
                <p>{n.Total} miljoner ton(MT) kol</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} lg={4}>
                <p className="fw-bold mb-0 p-rubrik">
                  Per capita{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalCo1(true)}
                    ></i>
                  </sup>
                </p>
                <p>{n["Per Capita"]} MT kol</p>
              </Col>
              <Col xs={6} lg={4}>
                <p className="fw-bold mb-0 p-rubrik">
                  Cementproduktion{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalCo2(true)}
                    ></i>
                  </sup>
                </p>
                <p>{n.Cement} MT kol</p>
              </Col>
              <Col xs={6} lg={4}>
                <p className="fw-bold mb-0 p-rubrik">
                  Flytande bränsle{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalCo3(true)}
                    ></i>
                  </sup>
                </p>
                <p>{n["Liquid Fuel"]} MT kol</p>
              </Col>

              <Col xs={6} lg={4}>
                <p className="fw-bold mb-0 p-rubrik">
                  Fast bränsle{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalCo4(true)}
                    ></i>
                  </sup>
                </p>
                <p>{n["Solid Fuel"]} MT kol</p>
              </Col>
              <Col xs={6} lg={4}>
                <p className="fw-bold mb-0 p-rubrik">
                  Gasfackling{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalCo5(true)}
                    ></i>
                  </sup>
                </p>
                <p>{n["Gas Flaring"]} MT kol</p>
              </Col>
              <Col xs={6} lg={4}>
                <p className="fw-bold mb-0 p-rubrik">
                  Gasbränsle{" "}
                  <sup>
                    <i
                      className="fa fa-question-circle"
                      variant="primary"
                      onClick={() => setModalCo6(true)}
                    ></i>
                  </sup>
                </p>
                <p>{n["Gas Fuel"]} MT kol</p>
              </Col>
            </Row>
          </Container>
          <ModalCo1 show={modalCo1} onHide={() => setModalCo1(false)} />
          <ModalCo2 show={modalCo2} onHide={() => setModalCo2(false)} />
          <ModalCo3 show={modalCo3} onHide={() => setModalCo3(false)} />
          <ModalCo4 show={modalCo4} onHide={() => setModalCo4(false)} />
          <ModalCo5 show={modalCo5} onHide={() => setModalCo5(false)} />
          <ModalCo6 show={modalCo6} onHide={() => setModalCo6(false)} />
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
                  src={co2}
                  style={{ "--size": ballSize }}
                  className="ball"
                  alt="ball"
                />
              </div>
            </Container>
          </Col>
          <Col sm={6} className="containerData ">
            <h1>Globala CO2-utsläpp från fossila bränslen</h1>
            <p>
              CO2 står för koldioxid. Det är utsläpp från till exempel bilar,
              tåg, flygplan. CO2 finns också vid tillverkning av elektronik och
              livsmedel.
              <EkoText />
            </p>
            <div className="d-none d-sm-block">{match}</div>
          </Col>
        </Row>
      </Container>

      <Slider
        className="slider"
        aria-label="Always visible"
        defaultValue={year}
        min={fetchedData.length > 0 ? fetchedData[0].Year : 0}
        max={
          fetchedData.length > 0 ? fetchedData[fetchedData.length - 1].Year : 0
        }
        step={1}
        marks={false}
        valueLabelDisplay="on"
        onChange={handleChange}
      />
      <div className="d-sm-none">{match}</div>
    </>
  );
};
export default Co2;
