import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
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

  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <h1 className="text-center h">Glaciärstorlek</h1>
        <p>
          Jordens temperatur ökar och då smälter glaciärerna. Detta påverkar
          isbjörnar och sälar, då de är beroende av isen.
        </p>
        <div className="wrapper">
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart
              data={fetchedData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
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
                tick={{ fontSize: 20, fill: "#82A1A8" }}
                stroke="#efefef"
                interval={5}
              />
              <YAxis
                tickLine={false}
                tick={{ fontSize: 20, fill: "#82A1A8" }}
                stroke="#efefef"
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
