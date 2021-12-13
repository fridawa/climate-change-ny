import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col } from "react-bootstrap";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import bakgrund1 from "../Images/back-glaciers.png";

const Glaciers = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Applikationens innehåll med förklarande text samt en area graf
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <Col xs={{ span: 6, offset: 6 }} className="pe-5 pt-4 overlay-text ">
          <h1 className="mb-0">Glaciärstorlek</h1>
          <p className="ps-3">
            Jordens temperatur ökar och då smälter glaciärerna. Detta påverkar
            isbjörnar och sälar, då de är beroende av isen.
          </p>
        </Col>

        <div className="wrapper overlay-graf">
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart
              data={fetchedData}
              margin={{
                top: 20,
                right: 30,
                left: 5,
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
                unit=" unit"
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Mean cumulative mass balance"
                stackId="1"
                stroke="#82A1A8"
                fill="#82A1A8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};
export default Glaciers;
