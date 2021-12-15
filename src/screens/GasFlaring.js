//import libraries and extentions
import { useEffect, useState } from "react";
import axios from "axios";
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
import AboutGasFlaringText from "../components/AboutTexts/AboutGasFlaring";
import bakgrund1 from "../Images/back-co2.png";

import ModalFilterYears from "../components/ModalText/ModalFilterYears";

const GasFlaring = (props) => {
  // Applikationens innehåll med förklarande text samt en line chart

  // Kod för sök- och filterfunktionmodulen
  const [CO2Emission, setCO2Emission] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  const [modalFilterShow, setFilterModalShow] = useState(false);

  //hanterar filterfunktionton till/från
  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...CO2Emission];
    if (YearFrom != "" && YearTo != "") {
      filtereddata = filtereddata.filter(
        (co2) => co2.Year >= YearFrom && co2.Year <= YearTo
      );
    }

    //gör det möjligt att ändra ordningen (lågt till högt eller högt till lågt)
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
        <div className="pt-sm-5 mt-sm-5">
          <Col
            xs={{ span: 6, offset: 1 }}
            className="pe-5 mt-4 pt-5 overlay-text "
          >
            <AboutGasFlaringText />

            {/* vid tryck på knappen visas modalen (setFilterModalShow blir true) */}
            <Button
              onClick={() => setFilterModalShow(true)}
              className="searchButton"
            >
              Sök och jämför år
            </Button>

          </Col>
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
                  dataKey="Gas Flaring"
                  stackId="a"
                  fill="#6D4B47"
                  stroke="#6D4B47"
                  type="monotone"
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
export default GasFlaring;
