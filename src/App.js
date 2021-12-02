import "./App.css";

import Home from "./components/Home";
import Co2 from "./components/Co2";
import GlobalTemp from "./components/GlobalTemp";
import OceanLevels from "./components/OceanLevels";
import Glaciers from "./components/Glaciers";
import Test from "./components/test";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/global-temp" element={<GlobalTemp />}></Route>
        <Route path="/co2" element={<Co2 />}></Route>
        <Route path="/ocean-levels" element={<OceanLevels />}></Route>
        <Route path="/glaciers" element={<Glaciers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
