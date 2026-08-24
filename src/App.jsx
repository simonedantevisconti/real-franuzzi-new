import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import Homepage from "./pages/Homepage";
import Rosa from "./pages/Rosa";
import Calendario from "./pages/Calendario";
import Statistiche from "./pages/Statistiche";
import Contatti from "./pages/Contatti";

const App = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/rosa" element={<Rosa />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/statistiche" element={<Statistiche />} />
        <Route path="/contatti" element={<Contatti />} />
      </Route>
    </Routes>
  );
};

export default App;
