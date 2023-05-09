import Home from "./components/home/home.component";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/about.component";

import Witness from "./components/witness/witness.component";
import InvasiveModification from "./components/invasive-modification/invasive-modification.component";
import Steps from "./components/steps/steps.component";
import Hyphen from "./components/hyphen/hyphen.component";
import Protection from "./components/protection/protection.component";
import FrenchLessons from "./components/french-lessons/french-lessons.component";
import March32 from "./components/march32/march32.component";

import PSR from "./components/psr/psr.component";
import "./index.css";
import Obj from "./components/obj/obj.component";
import Garbage from "./components/garbage/garbage.component";
import BrokenCity from "./components/broken-city/broken-city.component";
import DeadVase from "./components/dead-vase/dead-vase.component";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = "#dfdfdf";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/thewitness" element={<Witness />} />
        <Route
          path="/invasive-modification"
          element={<InvasiveModification />}
        />
        <Route path="/STEPS" element={<Steps />} />
        <Route path="/hyphen" element={<Hyphen />} />
        <Route path="/i-need-protection" element={<Protection />} />
        <Route path="/obj" element={<Obj />} />
        <Route path="/french-lessons" element={<FrenchLessons />} />

        <Route path="/garbage-throne" element={<Garbage />} />

        <Route path="/psr" element={<PSR />} />
        <Route path="/dead-vase" element={<DeadVase />} />
        <Route path="/broken-city" element={<BrokenCity />} />

        <Route path="/march32" element={<March32 />} />
      </Routes>
    </div>
  );
};
export default App;