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

const GasFlaring = (props) => {
  // Applikationens innehåll med förklarande text samt en line chart
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-5 mt-5">
          <Col
            xs={{ span: 6, offset: 1 }}
            className="pe-5 mt-4 pt-5 overlay-text "
          >
            <h1>Gaseldning</h1>
            <p>
              Gaseldning används i industrier där gas blir en biprodukt vid
              tillverkning av något annat.
            </p>
            <p>
              Gaseldningsprocessen sker oftast enbart för att elda upp gasen.
              Värmeenergin tas alltså inte tillvara på.
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

                <Area
                  dataKey="Gas Flaring"
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
export default GasFlaring;
