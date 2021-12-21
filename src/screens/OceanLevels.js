//import libraries and extentions
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col, Button } from "react-bootstrap";
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
import moment from "moment";
//import components
import bakgrund1 from "../Images/back-ocean.png";
import InfoTextMobile from "../components/AboutTexts/InfotextMobile";
import ModalFilterYearsOceanLev from "../components/Modals/ModalFilterYearsOceanLev";
import InfoText from "../components/AboutTexts/InfoText";

const OceanLevels = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [modalFilterShow, setFilterModalShow] = useState(false);

  // fetching the Ocean Levels data from API
  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Id to match the info text (printed on the chart)
  const idkey = "Havsnivå";

  // Funktion med moment formatter för årtal ist för datum
  const xAxisTickFormatter = (Time) => {
    return moment(Time).format("YYYY");
  };

  // Applikationens innehåll med förklarande text samt en linjegraf
  // The content off the app viev (Ocean levels) with info text and a line chart
  // the component is imported and used in the App.js component
  return (
    <>
      <Container
        fluid
        className="data-container p"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-4 mt-4 pt-md-5 mt-md-5">
          {/* Only visible in md-xl */}
          <Col
            xs={{ span: 6, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            className="mt-5 ps-5 ps-md-0 pe-md-5 pt-md-5 overlay-text d-none d-md-block"
          >
            {/* Info text */}
            <InfoText id={idkey} />

            {/* The modal is shown on click (setFilterModalShow sets to true) */}
            <Button
              onClick={() => setFilterModalShow(true)}
              className="searchButton"
            >
              Sök och jämför år
            </Button>
          </Col>

          {/*Only visible in xs-sm */}
          <Col className="d-md-none mt-5 ps-2">
            <h1>Havsnivå</h1>

            {/*gives the component InfoTextMobile its content through idkey*/}
            <InfoTextMobile id={idkey} />

            {/* The modal is shown on click (setFilterModalShow sets to true) */}
            <Button
              className="searchButton"
              onClick={() => setFilterModalShow(true)}
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* The graph. Using the fetched Global Temp data */}
          <div className="wrapper overlay-graf pt-2 pt-md-5">
            <ResponsiveContainer width="100%" height="80%">
              <LineChart
                data={fetchedData}
                margin={{
                  top: 20,
                  right: 70,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#efefef"
                  tickLine={false}
                />
                <XAxis
                  dataKey="Time"
                  tickLine={false}
                  tick={{ fill: "#3F8190" }}
                  stroke="#efefef"
                  tickFormatter={xAxisTickFormatter}
                />
                <YAxis
                  unit=" MM"
                  tickLine={false}
                  tick={{ fill: "#3F8190" }}
                  stroke="#efefef"
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="GMSL"
                  stroke="#3F8190"
                  strokeWidth={3}
                  dot={false}
                  name="Havsnivå"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Modal with data table and filter function. Uses the fetched data via props */}
        <ModalFilterYearsOceanLev
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
          data={fetchedData}
        />
      </Container>
    </>
  );
};
export default OceanLevels;
