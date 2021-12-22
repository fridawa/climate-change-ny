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

//import components
import bakgrund1 from "../Images/back-globaltemp.png";
import ModalFilterYearsTemp from "../components/Modals/ModalFilterYearsTemp";
import InfoText from "../components/AboutTexts/InfoText";
import InfoTextMobile from "../components/AboutTexts/InfotextMobile";

const GlobalTemp = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [modalFilterShow, setFilterModalShow] = useState(false);

  //fetching the Temp data from an API
  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/temp.json?key=8eb9e6f0")
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Changes the order on the fetched data (high to low)
  const reverseData = [...fetchedData];
  reverseData.reverse();

  //Filters only one specific data
  //pushing that filtered data into a new array
  const filteredArr = [];
  reverseData.map((n) => {
    if (n.Source === "GISTEMP") {
      // console.log(n);
      filteredArr.push(n);
      return filteredArr;
    } else {
      return null;
    }
  });

  // Id to match the info text (printed on the chart)
  const idkey = "Global Temperatur";

  // The content off the app viev (Global Temp) with info text and a line chart
  // the component is imported and used in the App.js component
  return (
    <>
      <Container
        fluid
        className="data-container "
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

          <Col className="d-md-none mt-5 ps-2">
            <h1>Global Teperatur</h1>

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
                data={filteredArr}
                margin={{
                  top: 20,
                  right: 70,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E4D5BE" />
                <XAxis
                  dataKey="Year"
                  tick={{ fill: "#646143" }}
                  tickLine={false}
                  stroke="#E4D5BE"
                />
                <YAxis
                  unit=" °C"
                  tick={{ fill: "#646143" }}
                  tickLine={false}
                  stroke="#E4D5BE"
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Mean"
                  unit=" °C"
                  stroke="#645C43"
                  strokeWidth={3}
                  dot={false}
                  name="Global temperatur"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Modal with data table and filter function. Uses the fetched data via props */}
        <ModalFilterYearsTemp
          show={modalFilterShow}
          onHide={() => setFilterModalShow(false)}
          data={fetchedData}
        />
      </Container>
    </>
  );
};

// exports the ckomponenten to App.js
export default GlobalTemp;
