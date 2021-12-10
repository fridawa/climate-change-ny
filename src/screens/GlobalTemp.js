import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

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

import bakgrund1 from "../Images/back-globaltemp.png";

const GlobalTemp = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/temp.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Vänder på datan så att årtalen går i stigande ordning
  const reverseData = [...fetchedData];
  reverseData.reverse();

  //Filtrerar ut bara en av mätningarna
  reverseData.map((n) => {
    if (n.Source == "GCAG") {
      console.log(n);
      return n;
    } else {
      return null;
    }
  });

  return (
    <>
      <Container
        fluid
        className="data-container p-5"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <h1>Global Temperatur</h1>
        <p> Klimatförändringarna gör så att jordens temperatur ökar.</p>
        {/* OBS denna behöver filtreras om vi bara vill ha en mätning per år */}
        <div className="wrapper">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              data={reverseData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Year" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Mean"
                stackId="1"
                stroke="#EA733D"
                fill="#EA733D"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};
export default GlobalTemp;
