import { Routes, Route, HashRouter } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { experiencesData } from "./data/experiences";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout activeSection={activeSection} />}>
          <Route index element={<Home setActiveSection={setActiveSection} />} />
          <Route 
            path="experiences/:group/:item" 
            element={<Experiences setActiveSection={setActiveSection} experiences={experiencesData} />} 
          />
          <Route path="services" element={<Services setActiveSection={setActiveSection} />} />
          <Route path="contact" element={<Contact setActiveSection={setActiveSection} />} />
          <Route path="*" element={<NoPage setActiveSection={setActiveSection} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;