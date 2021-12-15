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
import bakgrund1 from "../Images/back-co2.png";
import AboutCementText from "../components/AboutTexts/AboutCement";

import ModalFilterYears from "../components/ModalText/ModalFilterYears";

const Cement = (props) => {

  const [CO2Emission, setCO2Emission] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

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

  // Applikationens innehåll med förklarande text samt en line chart
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
            className="pe-5  mt-md-4 pt-5 overlay-text "
          >
            <AboutCementText />

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
                  dataKey="Cement"
                  stackId="a"
                  fill="#6D4B47"
                  stroke="#6D4B47"
                  type="monotone"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <ModalFilterYears
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
        />

      </Container>
    </>
  );
};
export default Cement;
