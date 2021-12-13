import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col } from "react-bootstrap";
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
import bakgrund1 from "../Images/back-co2.png";

const GasFuel = (props) => {
  // Applikationens innehåll med förklarande text samt en line chart
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <Col xs={{ span: 6, offset: 1 }} className="pe-5 pt-4 overlay-text ">
          <h1>Gasbränsle</h1>
          <p>Gasbränsle innefattar bränslen i gasform. </p>
          <p>
            Exempel på gasbränslen är till exempel fordonsgas vilket är ett
            drivmedel som består av biogas, naturgas eller kombinationer av de
            båda.
          </p>
          <p>
            Biogas är ett förnybart bränsle som ger mycket mindre utsläpp av
            koldioxid än bensin och diesel.
          </p>
          <p>
            Naturgas är ett fossilt (icke förnybart) bränsle som utvinns ur
            olja. Att köra bil på naturgas ger större utsläpp av växthusgaser än
            biogas men lägre än bensin och diesel.
          </p>
        </Col>
        <div className="wrapper overlay-graf">
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

              <Line
                dataKey="Gas Fuel"
                stackId="a"
                fill="#6D4B47"
                type="monotone"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};
export default GasFuel;
