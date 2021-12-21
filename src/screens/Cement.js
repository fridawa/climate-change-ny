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

const Cement = (props) => {
  const [modalFilterShow, setFilterModalShow] = useState(false);

  // Id to match the info text (printed on the chart)
  const idkey = "Cement";

  // The content off the app viev (Cement) with info text and a line chart
  // the component is imported and used in the App.js component
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-4 mt-4 pt-md-5 mt-md-5">
          {/* Ony visible in md-xl */}
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
            <h1>Cement</h1>
            <InfoTextMobile id={idkey} />
            <Button
              className="searchButton"
              onClick={() => setFilterModalShow(true)}
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* The graph. Using the fetched Co2 data */}
          <div className="wrapper overlay-grafpt-2 pt-md-5">
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
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={true}
                  horizontal={true}
                  stroke="#E4D5BE"
                />
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
                  dataKey="Cement"
                  stackId="a"
                  fill="#645C43"
                  stroke="#645C43"
                  type="monotone"
                  name="Utsläpp cement"
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
export default Cement;
