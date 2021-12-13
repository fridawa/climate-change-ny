//import libraries and extentions
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

//import components
import AboutGlaciersText from "../components/AboutTexts/AboutGlaciers";
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
        <div className="pt-sm-5 mt-sm-5">
          <Col
            xs={{ span: 6, offset: 6 }}
            className="pe-5  mt-4 pt-5 overlay-text "
          >
            <AboutGlaciersText />
          </Col>

          <div className="wrapper overlay-graf pt-5">
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart
                data={fetchedData}
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
        </div>
      </Container>
    </>
  );
};
export default Glaciers;
