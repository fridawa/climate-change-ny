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
import InfoText from "../components/InfoText";
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

  // Id för att matcha infortexten
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
            xs={{ span: 6, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            className="mt-5 ps-5 ps-md-0 pe-md-5 pt-md-5 overlay-text d-none d-md-block"
          >
            {/* Texten */}
            <InfoText id={idkey} />

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
          </Col>

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
          id={idkey}
        />
      </Container>
    </>
  );
};
export default Glaciers;
