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

import AboutLiquidFuelText from "../components/AboutTexts/AboutLiquidFuelText";
import bakgrund1 from "../Images/back-co2.png";

const LiquidFuel = (props) => {
  // Applikationens innehåll med förklarande text samt en line chart
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
<<<<<<< HEAD
        {" "}
        <Col
          xs={{ span: 6, offset: 1 }}
          className="pe-5  mt-4 pt-5 overlay-text "
        >
         <AboutLiquidFuelText />
        </Col>
        <div className="wrapper overlay-graf pt-5">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
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
=======
        <div className="pt-sm-5 mt-sm-5">
          <Col
            xs={{ span: 6, offset: 1 }}
            className="pe-5  mt-4 pt-5 overlay-text "
          >
            <h1>Flytande bränsle</h1>
            <p>Flytande bränsle innefattar bränslen i flytande form.</p>
            <p>
              Exempel på flytande bränslen är till exempel etanol, bensin eller
              diesel med mera.
            </p>
          </Col>
          <div className="wrapper overlay-graf pt-5">
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
                <YAxis unit=" unit" />
                <Tooltip />
                <Legend />
>>>>>>> 1568cf83e12c4aaaef1e7b265c35892929118e16

                <Area
                  dataKey="Liquid Fuel"
                  stackId="a"
                  fill="#6D4B47"
                  stroke="#6D4B47"
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
export default LiquidFuel;
