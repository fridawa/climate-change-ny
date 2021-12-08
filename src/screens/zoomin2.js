import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
} from "recharts";
import axios from "axios";

import { useState, useEffect } from "react";

// const data = [
//   { name: 1, cost: 4.11, impression: 100 },
//   { name: 2, cost: 2.39, impression: 120 },
//   { name: 3, cost: 1.37, impression: 150 },
//   { name: 4, cost: 1.16, impression: 180 },
//   { name: 5, cost: 2.29, impression: 200 },
//   { name: 6, cost: 3, impression: 499 },
//   { name: 7, cost: 0.53, impression: 50 },
//   { name: 8, cost: 2.52, impression: 100 },
//   { name: 9, cost: 1.79, impression: 200 },
//   { name: 10, cost: 2.94, impression: 222 },
//   { name: 11, cost: 4.3, impression: 210 },
//   { name: 12, cost: 4.41, impression: 300 },
//   { name: 13, cost: 2.1, impression: 50 },
//   { name: 14, cost: 8, impression: 190 },
//   { name: 15, cost: 0, impression: 300 },
//   { name: 16, cost: 9, impression: 400 },
//   { name: 17, cost: 3, impression: 200 },
//   { name: 18, cost: 2, impression: 50 },
//   { name: 19, cost: 3, impression: 100 },
//   { name: 20, cost: 7, impression: 100 },
// ];

const ZoomIn2 = () => {
  const [data1, setData] = useState({});
  const [left, setLeft] = useState("dataMin");
  const [right, setRight] = useState("dataMax");
  const [top, setTop] = useState("dataMax+1");
  const [bottom, setBottom] = useState("dataMin-1");
  const [top2, setTop2] = useState("dataMax+20");
  const [bottom2, setBottom2] = useState("dataMin-20");
  const [refAreaLeft1, setRefAreaLeft1] = useState("");
  const [refAreaRight1, setRefAreaRight1] = useState("");

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/co2.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Kan man bryta ur dessa och lägga som funktioner i app.js?
  // Eller måste de vara i varje data-fil?
  const zoom = (e) => {
    let refAreaLeft = refAreaLeft1;
    let refAreaRight = refAreaRight1;
    let zoomData = e;

    setRefAreaLeft1("");
    setRefAreaRight1("");
    setData(zoomData);
    setLeft(refAreaLeft);
    setRight(refAreaRight);
  };

  const zoomOut = (e) => {
    var zoomOutData = e;
    setData(zoomOutData);
    setRefAreaLeft1("");
    setRefAreaRight1("");
    setLeft("dataMin");
    setRight("dataMax");
  };

  return (
    <div className="highlight-bar-charts" style={{ userSelect: "none" }}>
      <button className="btn update" onClick={zoomOut}>
        Zoom Out
      </button>

      <LineChart
        width={800}
        height={400}
        data={fetchedData}
        onMouseDown={(e) => {
          setRefAreaLeft1(e.activeLabel);
        }}
        onMouseMove={(e) => {
          setRefAreaRight1(e.activeLabel);
        }}
        onMouseUp={zoom}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          allowDataOverflow
          dataKey="Year"
          domain={[left, right]}
          type="number"
        />
        <YAxis
          allowDataOverflow
          domain={[bottom, top]}
          type="number"
          yAxisId="1"
        />
        <YAxis
          orientation="right"
          allowDataOverflow
          domain={[bottom2, top2]}
          type="number"
          yAxisId="2"
        />
        <Tooltip />
        <Line
          yAxisId="1"
          type="natural"
          dataKey="Solid Fuel"
          stroke="#8884d8"
          animationDuration={300}
        />
        <Line
          yAxisId="2"
          type="natural"
          dataKey="Gas Fuel"
          stroke="#82ca9d"
          animationDuration={300}
        />

        {refAreaLeft1 && refAreaRight1 ? (
          <ReferenceArea
            yAxisId="1"
            x1={refAreaLeft1}
            x2={refAreaRight1}
            strokeOpacity={0.3}
          />
        ) : null}
      </LineChart>
    </div>
  );
};

export default ZoomIn2;
