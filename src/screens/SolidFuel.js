import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col } from "react-bootstrap";
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

import bakgrund1 from "../Images/back-co2.png";
import AboutSolidFuelText from "../components/AboutTexts/AboutSolidFuelText";

const SolidFuel = (props) => {
  // Applikationens innehåll med förklarande text samt en line chart
  return (
    <>
      <Container
        fluid
        className="data-container "
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >

<div className="pt-sm-5 mt-sm-5">
        <Col
          xs={{ span: 6, offset: 1 }}
          className="pe-5  mt-4 pt-5 overlay-text "
        >
          <AboutSolidFuelText />
        </Col>
        <div className="wrapper overlay-graf pt-5">
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart
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
              <YAxis unit=" unit" />
              <Tooltip />
              <Legend />

              <Area
                dataKey="Solid Fuel"
                stackId="a"
                stroke="#6D4B47"
                fill="#6D4B47"
                type="monotone"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        </div>
      </Container>
    </>
  );
};
export default SolidFuel;
