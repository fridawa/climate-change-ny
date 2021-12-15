//import libraries and extentions
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
  ReferenceArea,
} from "recharts";

//import components
import AboutGlobalTempText from "../components/AboutTexts/AboutGlobalTempText";
import bakgrund1 from "../Images/back-globaltemp-copy.png";

const GlobalTemp = () => {
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

  // Zoom funtkion
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

  // Applikationens innehåll med förklarande text samt en linjegraf
  return (
    <>
      <Container
        fluid
        className="data-container "
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-sm-5 mt-sm-5">
          <Col
            xs={{ span: 6, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            className="pe-5  mt-4 pt-5 overlay-text "
          >
            <AboutGlobalTempText />

            {/* <button className="btn update" onClick={zoomOut}>
            Zoom Out
          </button> */}
          </Col>

          <div className="wrapper overlay-graf pt-5">
            <ResponsiveContainer width="100%" height="80%">
              <LineChart
                data={filteredArr}
                margin={{
                  top: 20,
                  right: 70,
                  left: 10,
                  bottom: 0,
                }}
                width={800}
                height={400}
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
                  dataKey="Year"
                  allowDataOverflow
                  domain={[left, right]}
                  type="number"
                />
                <YAxis
                  unit=" °C"
                  // allowDataOverflow
                  // domain={[bottom, top]}
                  // type="number"
                  // yAxisId="1"
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Mean"
                  stackId="1"
                  stroke="#EA733D"
                  strokeWidth={3}
                  animationDuration={300}
                  dot={false}
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
            </ResponsiveContainer>
          </div>
        </div>
      </Container>
    </>
  );
};
export default GlobalTemp;
