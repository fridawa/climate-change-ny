import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import {
  ResponsiveContainer,
  LineChart,
  Line,
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
  //pusha in filtrering i ny array
  const filteredArr = [];
  reverseData.map((n) => {
    if (n.Source == "GISTEMP") {
      // console.log(n);
      filteredArr.push(n);
      return filteredArr;
    } else {
      return null;
    }
  });

  // Applikationens innehåll med förklarande text samt en linjegraf
  return (
    <>
      <Container
        fluid
        className="data-container "
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <h1>Global Temperatur</h1>
        <p> Klimatförändringarna gör så att jordens temperatur ökar.</p>
        <div className="wrapper">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              data={filteredArr}
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
