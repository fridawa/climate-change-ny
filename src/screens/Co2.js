import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col } from "react-bootstrap";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import bakgrund1 from "../Images/back-co2.png";

const Co2 = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/co2.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(fetchedData);
  // Applikationens innehåll med förklarande text
  // samt en bar chart där datan staplas på varandra
  return (
    <>
      <Container
        fluid
        className="data-container"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <Col xs={{ span: 6, offset: 1 }} className="pe-5 pt-4 overlay-text ">
          <h1>Koldioxidutsläpp</h1>
          <p>
            CO2 står för koldioxid. Det är utsläpp från till exempel bilar, tåg,
            flygplan. CO2 finns också vid tillverkning av elektronik och
            livsmedel.
          </p>
        </Col>
        <div className="wrapper overlay-graf">
          <ResponsiveContainer width="100%" height="80%">
            <BarChart
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
              <Bar dataKey="Gas Fuel" stackId="a" fill="#E2C7A8" />
              <Bar dataKey="Liquid Fuel" stackId="a" fill="#C1A47E" />
              <Bar dataKey="Solid Fuel" stackId="a" fill="#C48A7E" />
              <Bar dataKey="Cement" stackId="a" fill="#91714D" />
              <Bar dataKey="Gas Flaring" stackId="a" fill="#6D4B47" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};
export default Co2;
