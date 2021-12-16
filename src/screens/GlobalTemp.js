//import libraries and extentions
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
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
import AboutGlobalTempText from "../components/AboutTexts/AboutGlobalTempText";
import bakgrund1 from "../Images/back-globaltemp-copy.png";
import ModalGlobalTemp from "../components/ModalText/ModalGlobalTemp.js";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import ModalFilterYearsTemp from "../components/ModalText/ModalFilterYearsTemp";

const GlobalTemp = () => {
  //konstanter för modal (liten skärm, endast xs-sm )
  const [modalShow, setModalShow] = useState(false);

  //konstanter för modal (sök/filterfunktion)
  const [fetchedData, setFetchedData] = useState([]);
  const [modalFilterShow, setFilterModalShow] = useState(false);

  //fetchar in temperaturdatan så att den kan användas i komponenten
  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/temp.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Vänder på datan så att årtalen går i stigande ordning
  const reverseData = [...fetchedData];
  reverseData.reverse();

  //Filtrerar ut bara en av mätningarna
  //pusha in filtrering i ny array
  const filteredArr = [];
  reverseData.map((n) => {
    if (n.Source == "GISTEMP") {
      // console.log(n);
      filteredArr.push(n);
      return filteredArr;
    } else {
      return null;
    }
  });

  // Applikationens innehåll med förklarande text samt en linjegraf
  return (
    <>
      <Container
        fluid
        className="data-container "
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-3 mt-3 pt-md-5 mt-md-5">
          {/* Syns bara i md-xl */}

          <Col
            xs={{ span: 6, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            className="mt-5 ps-5 ps-md-0 pe-md-5 pt-md-5 overlay-text d-none d-md-block"
          >
            <AboutGlobalTempText />

            {/* Knapp till sök/filtermodal. Vid tryck på knappen visas modalen (setFilterModalShow blir true) */}
            <Button
              onClick={() => setFilterModalShow(true)}
              className="searchButton"
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* Elementet/komponenten ModalGlobalTemp syns ENDAST i xs-sm */}
          <Col className="d-md-none mt-5 ps-2">
            <h1>
              Global Teperatur
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
          />

          {/* Grafen som presenterar temp-datan */}
          <div className="wrapper overlay-graf pt-5">
            <ResponsiveContainer width="100%" height="80%">
              <LineChart
                data={filteredArr}
                margin={{
                  top: 20,
                  right: 70,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Year" />
                <YAxis unit=" °C" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Mean"
                  stackId="1"
                  stroke="#EA733D"
                  strokeWidth={3}
                  animationDuration={300}
                  dot={false}
                  name="Global temperatur"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Modalkomponenten som hanterar sök/filterfunktion modalkomponenten <ModalFilterYearsTemp */}
        <ModalFilterYearsTemp
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
        />
      </Container>
    </>
  );
};

// exporterar komponenten till App.js
export default GlobalTemp;
