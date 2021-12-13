import { Container, Col } from "react-bootstrap";
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

import AboutCo2Text from "../components/AboutTexts/AboutCo2Text";
import bakgrund1 from "../Images/back-co2.png";

const Co2 = (props) => {
  // Applikationens innehåll med förklarande text
  // samt en bar chart där datan staplas på varandra
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
          className="pe-5  mt-4 pt-5 overlay-text "
        >

          <AboutCo2Text />
        </Col>
        <div className="wrapper overlay-graf pt-5">
          <ResponsiveContainer width="100%" height="80%">
            <BarChart
              data={props.fetchedData}
              margin={{
                top: 20,
                right: 30,
                left: 5,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Year" />
              <YAxis unit=" MT" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Gas Fuel" stackId="a" fill="#E2C7A8" />
              <Bar dataKey="Liquid Fuel" stackId="a" fill="#C1A47E" />
              <Bar dataKey="Solid Fuel" stackId="a" fill="#C48A7E" />
              <Bar dataKey="Cement" stackId="a" fill="#91714D" />
              <Bar dataKey="Gas Flaring" stackId="a" fill="#6D4B47" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </div>
      </Container>
    </>
  );
};
export default Co2;
