import { Routes, Route, HashRouter } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Socials from "./pages/Socials";
import NoPage from "./pages/NoPage";

function App() {
  const [clickpage, setclickpage] = useState(window.location.pathname);
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout clickpage={clickpage} />}>
          <Route index element={<Home ready={()=> setclickpage("")} />} />
          <Route path="experiences/:group/:item" element={<Experiences ready={()=> setclickpage("experiences")} />} />
          <Route path="services" element={<Services ready={()=> setclickpage("services")} />} />
          <Route path="socials" element={<Socials ready={()=> setclickpage("socials")} />} />
          <Route path="*" element={<NoPage ready={()=> setclickpage("404")} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
