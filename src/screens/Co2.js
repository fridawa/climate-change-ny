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
import bakgrund1 from "../Images/back-co2.png";
import ModalGlobalTemp from "../components/Modals/ModalGlobalTemp.js";
import InfoTextMobile from "../components/AboutTexts/InfotextMobile";

import ModalFilterYears from "../components/Modals/ModalFilterYears";

import { BsFillQuestionCircleFill } from "react-icons/bs";

import InfoText from "../components/InfoText";

const Co2 = (props) => {
  // Applikationens innehåll med förklarande text
  // samt en bar chart där datan staplas på varandra

  const [CO2Emission, setCO2Emission] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const [modalFilterShow, setFilterModalShow] = useState(false);
  const [matchedData, setMatchedData] = useState([]);

  useEffect(() => {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCO2Emission(data);
        setFiltereddata(data);
      });
  }, []);

  // Id för att matcha infortexten
  const idkey = "Koldioxidutsläpp";

  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-4 mt-4 pt-md-5 mt-md-5">
          {/* Syns bara i md-xl */}
          <Col
            md={{ span: 6, offset: 1 }}
            className="mt-5 ps-5 ps-md-0 pe-md-5 pt-md-5 overlay-text d-none d-md-block"
          >
            {/* Infotext */}
            <InfoText id={idkey} />

            <Button
              className="searchButton"
              onClick={() => setFilterModalShow(true)}
              className="searchButton"
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* Syns bara i xs-sm */}
          <Col className="d-md-none mt-5 ps-2">
            <h1>
              Koldioxidutsläpp
              {/* <sup>
                <span onClick={() => setModalShow(true)} className=" p-2">
                  <BsFillQuestionCircleFill />
                </span>
              </sup> */}
            </h1>
            <InfoTextMobile id={idkey} />
          </Col>
          {/* <ModalGlobalTemp
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={idkey}
          /> */}
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
                <Bar
                  name="Gasbränsle"
                  dataKey="Gas Fuel"
                  stackId="a"
                  fill="#E2C7A8"
                />
                <Bar
                  name="Flytande bränsle"
                  dataKey="Liquid Fuel"
                  stackId="a"
                  fill="#C1A47E"
                />
                <Bar
                  name="Fast bränsle"
                  dataKey="Solid Fuel"
                  stackId="a"
                  fill="#C48A7E"
                />
                <Bar
                  name="Cement"
                  dataKey="Cement"
                  stackId="a"
                  fill="#91714D"
                />
                <Bar
                  name="Gaseldning"
                  dataKey="Gas Flaring"
                  stackId="a"
                  fill="#6D4B47"
                />
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
