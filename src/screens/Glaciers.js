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
} from "recharts";

//import components
import bakgrund1 from "../Images/back-glaciers.png";
import ModalFilterYearsGlaciers from "../components/Modals/ModalFilterYearsGlaciers";
import InfoText from "../components/AboutTexts/InfoText";
import InfoTextMobile from "../components/AboutTexts/InfotextMobile";

const Glaciers = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [modalFilterShow, setFilterModalShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Id för att matcha infotexten
  const idkey = "Glaciärstorlek";

  // Applikationens innehåll med förklarande text samt en area graf
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
            md={{ span: 6, offset: 5 }}
            lg={{ span: 5, offset: 6 }}
            className="mt-3 ps-5 ps-md-0 pe-md-2 pt-md-5 overlay-text d-none d-md-block"
          >
            {/* Texten */}
            <div className="glacInfo">
              <InfoText id={idkey} />
            </div>
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
            <h1>Glaciärstorlek </h1>
            <InfoTextMobile id={idkey} />
            <Button
              className="searchButton"
              onClick={() => setFilterModalShow(true)}
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* Grafen */}
          <div className="wrapper overlay-graf pt-2 pt-md-5">
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
                  stroke="#efefef"
                />
                <XAxis
                  dataKey="Year"
                  tickLine={false}
                  tick={{ fill: "#3F8190" }}
                  stroke="#efefef"
                  interval={8}
                />
                <YAxis
                  tickLine={false}
                  tick={{ fill: "#3F8190" }}
                  stroke="#efefef"
                  unit=" M"
                />
                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="Mean cumulative mass balance"
                  stackId="1"
                  stroke="#3F8190"
                  fill="none"
                  strokeWidth={3}
                  dot={false}
                  name="Glaciärstorlek"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* modal-komponenten som hanterar sök/filterfunktion.*/}
        {/* Skicka med id här i props så borde ModalFilterYears kunna bli en komponent likt infotextmobile */}
        <ModalFilterYearsGlaciers
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
          data={fetchedData}
        />
      </Container>
    </>
  );
};
export default Glaciers;
