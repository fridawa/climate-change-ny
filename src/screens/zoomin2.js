import {
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

const ZoomIn2 = (props) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/co2.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="highlight-bar-charts" style={{ userSelect: "none" }}>
      <button className="btn update" onClick={props.zoomOut}>
        Zoom Out
      </button>

      <LineChart
        width={800}
        height={400}
        data={fetchedData}
        onMouseDown={(e) => {
          props.setRefAreaLeft1(e.activeLabel);
        }}
        onMouseMove={(e) => {
          props.setRefAreaRight1(e.activeLabel);
        }}
        onMouseUp={props.zoom}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          allowDataOverflow
          dataKey="Year"
          domain={[props.left, props.right]}
          type="number"
        />
        <YAxis
          allowDataOverflow
          domain={[props.bottom, props.top]}
          type="number"
          yAxisId="1"
        />
        <YAxis
          orientation="right"
          allowDataOverflow
          domain={[props.bottom2, props.top2]}
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

        {props.refAreaLeft1 && props.refAreaRight1 ? (
          <ReferenceArea
            yAxisId="1"
            x1={props.refAreaLeft1}
            x2={props.refAreaRight1}
            strokeOpacity={0.3}
          />
        ) : null}
      </LineChart>
    </div>
  );
};

export default ZoomIn2;
