import "./App.css";

import Home from "./screens/Home";
import Co2 from "./screens/Co2";
import GlobalTemp from "./screens/GlobalTemp";
import OceanLevels from "./screens/OceanLevels";
import Glaciers from "./screens/Glaciers";
import Menu from "./routes/menu";
import Zoomin from "./screens/zoomin";
import Zoomin2 from "./screens/zoomin2";

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
        <Route path="/zoomin" element={<Zoomin />}></Route>
        <Route path="/zoomin2" element={<Zoomin2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
