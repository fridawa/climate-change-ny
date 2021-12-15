//import libraries and extentions
import { Container, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

//import components
import AboutCo2Text from "../components/AboutTexts/AboutCo2Text";
import bakgrund1 from "../Images/back-co2.png";

import ModalCo2 from "../components/ModalText/ModalCo2.js";
import ModalFilterYears from "../components/ModalText/ModalFilterYears";

const Co2 = (props) => {
  // Applikationens innehåll med förklarande text
  // samt en bar chart där datan staplas på varandra

  const [CO2Emission, setCO2Emission] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const [modalFilterShow, setFilterModalShow] = useState(false);

  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...CO2Emission];
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (co2) => co2.Year >= YearFrom && co2.Year <= YearTo
      );
    }

    if (Order === "LTH") {
      filtereddata.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (Order === "HTL") {
      filtereddata.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }

    setFiltereddata(filtereddata);
  };

  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-3 mt-3 pt-md-5 mt-md-5">
          {/* Syns bara i md-xl */}
          <Col
            md={{ span: 6, offset: 1 }}
            className="mt-5 ps-5 ps-md-0 pe-md-5 pt-md-5 overlay-text d-none d-md-block"
          >
            <AboutCo2Text/>
            <Button className="searchButton"
              onClick={() => setFilterModalShow(true)}
              className="searchButton"
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* Syns bara i xs-sm */}
          <Col className="d-md-none mt-5 ps-2">
            <h1>
              Koldioxidutsläpp{" "}
              <span
                onClick={() => setModalShow(true)}
                className=" p-2"
                style={{ backgroundColor: "#ffffff" }}
              >
                ?
              </span>
              .
            </h1>
          </Col>
          <ModalCo2 show={modalShow} onHide={() => setModalShow(false)} />

          {/* Grafen */}
          <div className="wrapper overlay-graf pt-5">
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                data={props.fetchedData}
                margin={{
                  top: 20,
                  right: 70,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Year" />
                <YAxis unit=" MT" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Gas Fuel" stackId="a" fill="#E2C7A8" />
                <Bar dataKey="Liquid Fuel" stackId="a" fill="#C1A47E" />
                <Bar dataKey="Solid Fuel" stackId="a" fill="#C48A7E" />
                <Bar dataKey="Cement" stackId="a" fill="#91714D" />
                <Bar dataKey="Gas Flaring" stackId="a" fill="#6D4B47" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Container>

      <Container
        style={{
          position: "absolute",
          marginLeft: "3em",
          marginTop: "60em",
          marginBottom: "0",
        }}
      >

      {/* modal-komponenten som hanterar sök/filterfunktion.*/}
        <ModalFilterYears
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
        />
      </Container>
    </>
  );
};

export default Co2;
