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
import bakgrund1 from "../Images/back-co2.png";

const SolidFuel = () => {
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
        <h1>Fast bränsle</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
          porttitor ante, ut porttitor sapien. Maecenas tincidunt lectus eu
          imperdiet molestie. Fusce euismod neque sed mi commodo malesuada.
          Fusce diam dolor, aliquam at nisi nec, eleifend convallis ante.
        </p>
        <div className="wrapper">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              data={fetchedData}
              margin={{
                top: 10,
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

              <Line dataKey="Solid Fuel" stackId="a" fill="#6D4B47" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};
export default SolidFuel;
