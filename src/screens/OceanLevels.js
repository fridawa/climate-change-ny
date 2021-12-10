import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
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

import bakgrund1 from "../Images/back-ocean.png";

const OceanLevels = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0")
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
        <h1>Havsnivå</h1>
        <p>
          Klimatförändringar gör så att jordens temperatur ökar. Detta leder
          till att glaciären och inlandsisen smälter. När isen smälter, höjs
          havsnivån.
        </p>
        <div className="wrapper">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              data={fetchedData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Time" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="GMSL"
                stroke="#17A2A5"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};
export default OceanLevels;
