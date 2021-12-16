//import libraries and extentions
import { useState } from "react";
import { Container, Col, Button } from "react-bootstrap";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

//import components
import bakgrund1 from "../Images/back-co2.png";
import ModalGlobalTemp from "../components/ModalText/ModalGlobalTemp.js";

import { BsFillQuestionCircleFill } from "react-icons/bs";

import ModalFilterYears from "../components/ModalText/ModalFilterYears";
import Match from "../components/InfoText";

//här är ju redan datan importerad genom PROPS. Om vi kan istället för

const SolidFuel = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [CO2Emission, setCO2Emission] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  const [modalFilterShow, setFilterModalShow] = useState(false);

  //Borde bryta ut
  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...CO2Emission];
    if (YearFrom !== "" && YearTo !== "") {
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

  // Id för att matcha infortexten
  const idkey = "Fast bränsle";

  // Applikationens innehåll med förklarande text samt en line chart
  return (
    <>
      <Container
        fluid
        className="data-container "
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-sm-5 mt-sm-5">
          {/* Syns bara i md-xl */}
          <Col
            md={{ span: 6, offset: 1 }}
            className="mt-5 ps-5 ps-md-0 pe-md-5 pt-md-5 overlay-text d-none d-md-block"
          >
            {/* Infotext */}
            <Match id={idkey} />

            {/* vid tryck på knappen visas modalen (setFilterModalShow blir true) */}
            <Button
              onClick={() => setFilterModalShow(true)}
              className="searchButton"
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* Syns bara i xs-sm */}
          <Col className="d-md-none mt-5 ps-2">
            <h1>
              Fast bränsle
              <sup>
                <span onClick={() => setModalShow(true)} className=" p-2">
                  <BsFillQuestionCircleFill />
                </span>
              </sup>
            </h1>
          </Col>
          <ModalGlobalTemp
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={idkey}
          />
          {/* Grafen */}
          <div className="wrapper overlay-graf pt-5">
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart
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

                <Area
                  dataKey="Solid Fuel"
                  stackId="a"
                  stroke="#6D4B47"
                  fill="#6D4B47"
                  type="monotone"
                  name="Fast bränsle"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* modal-komponenten som hanterar sök/filterfunktion.*/}
        <ModalFilterYears
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
        />
      </Container>
    </>
  );
};
export default SolidFuel;
