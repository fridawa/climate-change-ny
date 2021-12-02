import { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const GlobalTemp = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/temp.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Global Temperatur</h1>
      <p> Klimatförändringarna gör så att jordens temperatur ökar.</p>
      {/* OBS denna behöver filtreras om vi bara vill ha en mätning per år */}
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Mean"
              stackId="1"
              stroke="#EA733D"
              fill="#EA733D"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default GlobalTemp;
