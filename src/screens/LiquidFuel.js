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

  // Id to match the info text
  const idkey = "Flytande bränsle";

   // The content off the app viev (Co2, Liquid Fuel) with info text and a line chart
  // the component is imported and used in the App.js component
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-4 mt-4 pt-md-5 mt-md-5">
          {/* Only visible in md-xl */}
          <Col
            md={{ span: 6, offset: 1 }}
            className="mt-5 ps-5 ps-md-0 pe-md-5 pt-md-5 overlay-text d-none d-md-block"
          >
            {/* Info text */}
            <InfoText id={idkey} />

            {/* The modal is shown on click (setFilterModalShow sets to true) */}
            <Button
              onClick={() => setFilterModalShow(true)}
              className="searchButton"
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* Only visible in xs-sm */}
          <Col className="d-md-none mt-5 ps-2">
            <h1>Flytande bränsle</h1>

            {/*gives the component InfoTextMobile its content through idkey*/}
            <InfoTextMobile id={idkey} />
            
            {/* The modal is shown on click (setFilterModalShow sets to true) */}
            <Button
              className="searchButton"
              onClick={() => setFilterModalShow(true)}
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* The graph. Using the fetched Liquid Fuel data */}
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Year" />
                <YAxis unit=" MT" />
                <Tooltip />
                <Legend />

                <Area
                  dataKey="Liquid Fuel"
                  stackId="a"
                  fill="#6D4B47"
                  stroke="#6D4B47"
                  type="monotone"
                  name="Flytande bränsle"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Modal with data table and filter function. Uses the fetched data via props */}
        <ModalFilterYears
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
          data={props.fetchedData}
        />
      </Container>
    </>
  );
};

// exports the componentent
export default LiquidFuel;
