import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import ScrollToTop from "./components/ScrollToTop";

import Homepage from "./pages/Homepage";
import Rosa from "./pages/Rosa";
import Calendario from "./pages/Calendario";
import Statistiche from "./pages/Statistiche";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/rosa" element={<Rosa />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/statistiche" element={<Statistiche />} />
          <Route path="/contatti" element={<Contatti />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
