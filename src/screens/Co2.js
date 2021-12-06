import { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
const Co2 = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/co2.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const year = fetchedData.map((e) => {
    return e.Year;
  });

  const gasFuel = fetchedData.map((e) => {
    return e["Gas Fuel"];
  });
  const liquidFuel = fetchedData.map((e) => {
    return e["GaLiquids Fuel"];
  });
  const solidFuel = fetchedData.map((e) => {
    return e["Solid Fuel"];
  });
  const gasFlaring = fetchedData.map((e) => {
    return e["Gas Flaring"];
  });
  const cement = fetchedData.map((e) => {
    return e["Cement"];
  });
  return (
    <>
      <h1>Koldioxidutsläpp</h1>
      <p>
        CO2 står för koldioxid. Det är utsläpp från till exempel bilar, tåg,
        flygplan. CO2 finns också vid tillverkning av elektronik och livsmedel.
      </p>
      <div className="wrapper">
        <ResponsiveContainer width="100%" height="60%">
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
              dataKey="Gas Fuel"
              stackId="1"
              stroke="#BBEAFF"
              fill="#BBEAFF"
            />
            <Area
              type="monotone"
              dataKey="Liquid Fuel"
              stackId="1"
              stroke="#A9D3EA"
              fill="#A9D3EA"
            />
            <Area
              type="monotone"
              dataKey="Solid Fuel"
              stackId="1"
              stroke="#89B9CE"
              fill="#89B9CE"
            />
            <Area
              type="monotone"
              dataKey="Cement"
              stackId="1"
              stroke="#699CB2"
              fill="#699CB2"
            />
            <Area
              type="monotone"
              dataKey="Gas Flaring"
              stackId="1"
              stroke="#4083A0"
              fill="#4083A0"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default Co2;
