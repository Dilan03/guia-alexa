import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Vulnerabilities from "./components/Vulnerabilities";
import ConfigMenu from "./components/ConfigMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";

import InstructionScreen1 from "./components/configuraciones/conf1/InstructionScreen1";
import InstructionScreen2 from "./components/configuraciones/conf2/InstructionScreen2";
import InstructionScreen3 from "./components/configuraciones/conf3/InstructionScreen3";
import InstructionScreen4 from "./components/configuraciones/conf4/InstructionScreen4";
import InstructionScreen5 from "./components/configuraciones/conf5/InstructionScreen5";
import Notificaciones from "./components/Notificaciones";

function AppRouter() {
   return (

      <Router>
         <Header />
         <div className="container-fluid p-0">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/vulnerabilities" element={<Vulnerabilities />} />
               <Route path="/config-menu" element={<ConfigMenu />} />
               <Route path="/conf1" element={<InstructionScreen1 />} />
               <Route path="/conf2" element={<InstructionScreen2 />} />
               <Route path="/conf3" element={<InstructionScreen3 />} />
               <Route path="/conf4" element={<InstructionScreen4 />} />
               <Route path="/conf5" element={<InstructionScreen5 />} />
               <Route path="/notificaciones" element={<Notificaciones />} />
            </Routes>
         </div>
         <Footer />
      </Router>
   );
}

export default AppRouter;