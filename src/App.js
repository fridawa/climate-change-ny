import "./App.css";

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
  return (
    <div className="App">
      <Menu />

      {/* <Test /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/global-temp" element={<GlobalTemp />}></Route>
        <Route path="/co2" element={<Co2 />}></Route>
        <Route path="/ocean-levels" element={<OceanLevels />}></Route>
        <Route path="/glaciers" element={<Glaciers />}></Route>
        <Route path="/gas-flaring" element={<GasFlaring />}></Route>
        <Route path="/gas-fuel" element={<GasFuel />}></Route>
        <Route path="/liquid-fuel" element={<LiquidFuel />}></Route>
        <Route path="/solid-fuel" element={<SolidFuel />}></Route>
        <Route path="/cement" element={<Cement />}></Route>

        <Route path="/zoomin2" element={<Zoomin2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
