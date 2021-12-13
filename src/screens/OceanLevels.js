import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col } from "react-bootstrap";
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

import AboutOceanLevelsText from "../components/AboutTexts/AboutOceanLevelsText";
import bakgrund1 from "../Images/back-ocean.png";

const OceanLevels = () => {
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
      .get("https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0")
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

  // Massa försök att lägga in de datum som gjorts om till integers
  // i arrayen som skickas till grafen
  // för att kunna använda type="number" så att zoomen fungerar
  const yearAsIntt = fetchedData.map((n) => {
    const yearAsString = n.Time.slice(0, 4);
    const yearAsInt = parseInt(yearAsString);
    return yearAsInt;
  });

  console.log(yearAsIntt);

  var result = Object.keys(yearAsIntt).map((key) => [
    Number(key),
    yearAsIntt[key],
  ]);
  // console.log(result);

  function renameKeys(result, newKeys) {
    const keyValues = Object.keys(result).map((key) => {
      const newKey = newKeys[key] || key;
      return { [newKey]: result[key] };
    });
    return Object.assign({}, ...keyValues);
  }
  console.log(result);

  const newKeys = { 0: "Row", 1: "Time" };
  const renamedObj = renameKeys(result, newKeys);
  // console.log(renamedObj);

  const arrayCopy = [...fetchedData];
  arrayCopy.push(yearAsIntt);
  // console.log(arrayCopy);

  // var res = fetchedData.map(
  //   (obj) => yearAsIntt.find((o) => o.id === obj.id) || obj
  // );

  // Applikationens innehåll med förklarande text samt en linjegraf
  return (
    <>
      <Container
        fluid
        className="data-container p"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <Col
          xs={{ span: 6, offset: 1 }}
          className="pe-5 mt-4 pt-5 overlay-text "
        >
 <AboutOceanLevelsText />
          {/* <button className="btn update" onClick={zoomOut}>
            Zoom Out
          </button> */}
        </Col>
        <div className="wrapper overlay-graf pt-5">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              data={fetchedData}
              margin={{
                top: 20,
                right: 30,
                left: 5,
                bottom: 0,
              }}
              onMouseDown={(e) => {
                setRefAreaLeft1(e.activeLabel);
              }}
              onMouseMove={(e) => {
                setRefAreaRight1(e.activeLabel);
              }}
              onMouseUp={zoom}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Time" />
              <YAxis unit=" unit" />
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
