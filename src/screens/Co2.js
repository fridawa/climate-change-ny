//import libraries and extentions
import { Container, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/Fallback";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

//import components
import bakgrund1 from "../Images/back-co2.png";
import InfoTextMobile from "../components/AboutTexts/InfotextMobile";
import ModalFilterYears from "../components/Modals/ModalFilterYears";
import InfoText from "../components/AboutTexts/InfoText";

const Co2 = (props) => {
  
const [modalFilterShow, setFilterModalShow] = useState(false);

   // Id to match the info text (printed on the chart)
  const idkey = "Koldioxidutsläpp";

  const errorHandler = (error, errorInfo) => {
    console.log("logging", error, errorInfo)
  }

  // The content off the app viev (Co2) with info text and a line chart
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
            {/* Infotext */}
            <InfoText id={idkey} />

            <Button
              className="searchButton"
              onClick={() => setFilterModalShow(true)}
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* Only visible in xs-sm */}
          <Col className="d-md-none mt-5 ps-2">
            <h1>Koldioxidutsläpp</h1>
            <InfoTextMobile id={idkey} />

            {/* The modal is shown on click (setFilterModalShow sets to true) */}
            <Button
              className="searchButton"
              onClick={() => setFilterModalShow(true)}
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* The graph. Using the fetched Co2 data */}
          <div className="wrapper overlay-graf pt-2 pt-md-5">
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                data={props.fetchedData}
                margin={{
                  top: 20,
                  right: 70,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="Year"
                  tick={{ fill: "#646143" }}
                  stroke="#efefef"
                />
                <YAxis unit=" MT" tick={{ fill: "#646143" }} stroke="#efefef" />
                <Tooltip />
                <Legend />
                <Bar
                  name="Gasbränsle"
                  dataKey="Gas Fuel"
                  stackId="a"
                  fill="#D0B66A"
                />
                <Bar
                  name="Flytande bränsle"
                  dataKey="Liquid Fuel"
                  stackId="a"
                  fill="#877B4A"
                />
                <Bar
                  name="Fast bränsle"
                  dataKey="Solid Fuel"
                  stackId="a"
                  fill="#765537"
                />
                <Bar
                  name="Cement"
                  dataKey="Cement"
                  stackId="a"
                  fill="#483E2E"
                />
                <Bar
                  name="Gaseldning"
                  dataKey="Gas Flaring"
                  stackId="a"
                  fill="#251B0B"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Container>

      <Container
        style={{
          position: "absolute",
          marginLeft: "3em",
          marginTop: "60em",
          marginBottom: "0",
        }}
      >
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

export default Co2;
