import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// the different views
import Home from "./screens/Home";
import Co2 from "./screens/Co2";
import GlobalTemp from "./screens/GlobalTemp";
import OceanLevels from "./screens/OceanLevels";
import Glaciers from "./screens/Glaciers";
import Menu from "./routes/menu";
import Zoomin2 from "./screens/zoomin2";
import GasFlaring from "./screens/GasFlaring";
import GasFuel from "./screens/GasFuel";
import LiquidFuel from "./screens/LiquidFuel";
import SolidFuel from "./screens/SolidFuel";
import Cement from "./screens/Cement";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data1, setData] = useState({});
  const [left, setLeft] = useState("dataMin");
  const [right, setRight] = useState("dataMax");
  const [top, setTop] = useState("dataMax+1");
  const [bottom, setBottom] = useState("dataMin-1");
  const [top2, setTop2] = useState("dataMax+20");
  const [bottom2, setBottom2] = useState("dataMin-20");
  const [refAreaLeft1, setRefAreaLeft1] = useState("");
  const [refAreaRight1, setRefAreaRight1] = useState("");
  // Hämtar in iaf co2-datan här så inte den behöver hämtas på varje sida
  const [fetchedDataCo2, setFetchedDataCo2] = useState([]);
  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/co2.json?key=8eb9e6f0")
      .then((res) => setFetchedDataCo2(res.data))
      .catch((err) => console.log(err));
  }, []);

  //zoomfunktion som just nu bara skickas till Zoomin2 för test
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
    <div className="App">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/global-temp" element={<GlobalTemp />}></Route>
        <Route
          path="/co2"
          element={<Co2 fetchedData={fetchedDataCo2} />}
        ></Route>
        <Route path="/ocean-levels" element={<OceanLevels />}></Route>
        <Route path="/glaciers" element={<Glaciers />}></Route>
        <Route
          path="/gas-flaring"
          element={<GasFlaring fetchedData={fetchedDataCo2} />}
        ></Route>
        <Route
          path="/gas-fuel"
          element={<GasFuel fetchedData={fetchedDataCo2} />}
        ></Route>
        <Route
          path="/liquid-fuel"
          element={<LiquidFuel fetchedData={fetchedDataCo2} />}
        ></Route>
        <Route
          path="/solid-fuel"
          element={<SolidFuel fetchedData={fetchedDataCo2} />}
        ></Route>
        <Route
          path="/cement"
          element={<Cement fetchedData={fetchedDataCo2} />}
        ></Route>
        <Route
          path="/zoomin2"
          element={
            <Zoomin2
              setRefAreaLeft1={setRefAreaLeft1}
              setRefAreaRight1={setRefAreaRight1}
              left={left}
              right={right}
              bottom={bottom}
              top={top}
              bottom2={bottom2}
              top2={top2}
              refAreaLeft1={refAreaLeft1}
              refAreaRight1={refAreaRight1}
              zoom={zoom}
              zoomOut={zoomOut}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
