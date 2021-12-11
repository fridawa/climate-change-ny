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

const LiquidFuel = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/co2.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Applikationens innehåll med förklarande text samt en line chart
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        {" "}
        <Col xs={{ span: 6, offset: 1 }} className="pe-5 pt-4 overlay-text ">
          <h1>Flytande bränsle</h1>
          <p>Flytande bränsle innefattar bränslen i flytande form.</p>
          <p>
            Exempel på flytande bränslen är till exempel etanol, bensin eller
            diesel med mera.
          </p>
        </Col>
        <div className="wrapper overlay-graf">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              data={fetchedData}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Year" />
              <YAxis unit=" unit" />
              <Tooltip />
              <Legend />

              <Line
                dataKey="Liquid Fuel"
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
export default LiquidFuel;
