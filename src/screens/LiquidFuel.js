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

import ModalFilterYears from "../components/Modals/ModalFilterYears";
import InfoText from "../components/AboutTexts/InfoText";
import InfoTextMobile from "../components/AboutTexts/InfotextMobile";

const LiquidFuel = (props) => {
  const [modalFilterShow, setFilterModalShow] = useState(false);

  // Id för att matcha infortexten
  const idkey = "Flytande bränsle";

  // Applikationens innehåll med förklarande text samt en line chart
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
            <h1>Flytande bränsle</h1>
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
              <AreaChart
                data={props.fetchedData}
                margin={{
                  top: 20,
                  right: 70,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E4D5BE" />
                <XAxis
                  dataKey="Year"
                  tick={{ fill: "#646143" }}
                  tickLine={false}
                  stroke="#E4D5BE"
                />
                <YAxis
                  unit=" MT"
                  tick={{ fill: "#646143" }}
                  tickLine={false}
                  stroke="#E4D5BE"
                />
                <Tooltip />
                <Legend />

                <Area
                  dataKey="Liquid Fuel"
                  stackId="a"
                  fill="#645C43"
                  stroke="#645C43"
                  type="monotone"
                  name="Flytande bränsle"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* modal-komponenten som hanterar sök/filterfunktion.*/}
        <ModalFilterYears
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
          data={props.fetchedData}
        />
      </Container>
    </>
  );
};
export default LiquidFuel;
