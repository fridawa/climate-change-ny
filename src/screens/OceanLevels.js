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
import AboutOceanLevelsText from "../components/AboutTexts/AboutOceanLevelsText";
import bakgrund1 from "../Images/back-ocean.png";
import ModalOcean from "../components/ModalText/ModalOcean.js";

import { BsFillQuestionCircleFill } from "react-icons/bs";
import ModalFilterYearsOceanLev from "../components/ModalText/ModalFilterYearsOceanLev";

const OceanLevels = () => {
  const [modalShow, setModalShow] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [modalFilterShow, setFilterModalShow] = useState(false);

  //konvertera string till int
  const yearAsIntt = fetchedData.map((n) => {
    const yearAsString = n.Time.slice(0, 4);
    const yearAsInt = parseInt(yearAsString);
    return yearAsInt;
  });

  console.log(yearAsIntt);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Applikationens innehåll med förklarande text samt en linjegraf
  return (
    <>
      <Container
        fluid
        className="data-container p"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-sm-5 mt-sm-5">
          {/* Syns bara i md-xl */}
          <Col
            xs={{ span: 6, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            className="mt-5 ps-5 ps-md-0 pe-md-5 pt-md-5 overlay-text d-none d-md-block"
          >
            <AboutOceanLevelsText />

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
              Havsnivå
              <sup>
                <span onClick={() => setModalShow(true)} className=" p-2">
                  <BsFillQuestionCircleFill />
                </span>
              </sup>
            </h1>
          </Col>
          <ModalOcean show={modalShow} onHide={() => setModalShow(false)} />

          {/* Grafen */}
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Time" />
                <YAxis unit=" MM" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="GMSL"
                  stroke="#17A2A5"
                  strokeWidth={3}
                  dot={false}
                  name="Havsnivå"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* modal-komponenten som hanterar sök/filterfunktion.*/}
        <ModalFilterYearsOceanLev
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
        />
      </Container>
    </>
  );
};
export default OceanLevels;
