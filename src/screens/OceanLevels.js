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

  //  // konvertera string till int
  // function xAxisTickFormatter() {
  //   fetchedData.map((n) => {
  //     const yearAsString = n.Time.slice(0, 4);
  //     return yearAsString;
  //   });
  // }

  //   console.log(yearAsIntt);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Id för att matcha infortexten
  const idkey = "Havsnivå";

  const xAxisTickFormatter = (Time) => {
    return moment(Time).format("YYYY");
  };

  // Applikationens innehåll med förklarande text samt en linjegraf
  return (
    <>
      <Container
        fluid
        className="data-container p"
        style={{ backgroundImage: `url(${bakgrund1})` }}
      >
        <div className="pt-4 mt-4 pt-md-5 mt-md-5">
          {/* Syns bara i md-xl */}
          <Col
            xs={{ span: 6, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            className="mt-5 ps-5 ps-md-0 pe-md-5 pt-md-5 overlay-text d-none d-md-block"
          >
            {/* Infotext */}
            <InfoText id={idkey} />

            {/* vid tryck på knappen visas modalen (setFilterModalShow blir true) */}
            <Button
              onClick={() => setFilterModalShow(true)}
              className="searchButton"
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* Syns bara i xs-sm */}
          <Col className="d-md-none mt-5 ps-2">
            <h1>Havsnivå</h1>
            <InfoTextMobile id={idkey} />
            <Button
              className="searchButton"
              onClick={() => setFilterModalShow(true)}
            >
              Sök och jämför år
            </Button>
          </Col>

          {/* Grafen */}
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

        {/* modal-komponenten som hanterar sök/filterfunktion.*/}
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
