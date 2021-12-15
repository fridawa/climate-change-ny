//import libraries and extentions
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col, Button } from "react-bootstrap";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
} from "recharts";

//import components
import AboutGlaciersText from "../components/AboutTexts/AboutGlaciers";
import bakgrund1 from "../Images/back-glaciers.png";

import ModalFilterYearsGlaciers from "../components/ModalText/ModalFilterYearsGlaciers";

const Glaciers = (props) => {
  const [fetchedData, setFetchedData] = useState([]);

  const [GlacierData, setGlacierData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

  const [modalFilterShow, setFilterModalShow] = useState(false);


  const handleYearFilter = (YearFrom, YearTo, Order) => {
    let filtereddata = [...GlacierData];
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


  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Applikationens innehåll med förklarande text samt en area graf
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-sm-5 mt-sm-5">
          <Col
            xs={{ span: 6, offset: 6 }}
            className="pe-5  mt-4 pt-5 overlay-text "
          >
            <AboutGlaciersText />

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
              <LineChart
                data={fetchedData}
                margin={{
                  top: 20,
                  right: 70,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={true}
                  horizontal={true}
                  stroke="#d3eafc"
                />
                <XAxis
                  dataKey="Year"
                  tickLine={false}
                  tick={{ fill: "#82A1A8" }}
                  stroke="#efefef"
                  interval={5}
                />
                <YAxis
                  tickLine={false}
                  tick={{ fill: "#82A1A8" }}
                  stroke="#efefef"
                  unit=" M"
                />
                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="Mean cumulative mass balance"
                  stackId="1"
                  stroke="#82A1A8"
                  fill="none"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* modal-komponenten som hanterar sök/filterfunktion.*/}
        <ModalFilterYearsGlaciers
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
        />

      </Container>
    </>
  );
};
export default Glaciers;
