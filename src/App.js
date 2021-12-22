//import libraries and extentions
import { useState, useEffect } from "react";
import axios from "axios";

//import components
import "./App.css";
import Home from "./screens/Home";
import Co2 from "./screens/Co2";
import GlobalTemp from "./screens/GlobalTemp";
import OceanLevels from "./screens/OceanLevels";
import Glaciers from "./screens/Glaciers";
import Menu from "./routes/menu";
import MobilMenu from "./routes/mobilmenu";
import GasFlaring from "./screens/GasFlaring";
import GasFuel from "./screens/GasFuel";
import LiquidFuel from "./screens/LiquidFuel";
import SolidFuel from "./screens/SolidFuel";
import Cement from "./screens/Cement";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  // Hämtar in iaf co2-datan här så inte den behöver hämtas på varje sida
  const [fetchedDataCo2, setFetchedDataCo2] = useState([]);

  // try{

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/co2.json?key=8eb9e6f0")
      .then((res) => setFetchedDataCo2(res.data))
      .catch((err) => console.log(err));
  }, []);

  // } catch(ex) {
  //   if(ex.response && ex.respone.status === 404) {
  //     alert("noooo")
  //   }
  //   else {"logging the error"}
  //   alert ("something happend")
  // }

  // if statement that alerts the user id the data can not be fetched by any reason

  // FATTAR INTE VARFÖR INTE DET SKRIVS UT DET SOM STÅR I ERROR
  if (fetchedDataCo2.length === 0) {
    //  throw new Error ("Åh nej, sidan kan inte laddas. Försök igen om en liten stund!");
    return <p>Sidan laddas. Tar det lång tid? Testa att uppdatera sidan!</p>;
  }

  // app component containing all the climare view components, meues and footer
  // Routes and path makes the navigation possible
  return (
    <>
      <div className="App">
        <Menu />
        <MobilMenu />
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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

// exported to be rendered in the root
export default App;
