import { Routes, Route, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
// import Projets from "./pages/Projets";
import Services from "./pages/Services";
import Socials from "./pages/Socials";
import NoPage from "./pages/NoPage";

function App() {
  const [clickpage, setclickpage] = useState(window.location.pathname);
  // const [list, setlist] = useState([]);
  useEffect(()=>{
    // axios({method: 'GET', url: "https://api.github.com/users/iamkepo/repos"})
    // .then((response)=> {
    //   setlist(response.data);
    // });
  }, [])
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout clickpage={clickpage} />}>
          <Route index element={<Home ready={()=> setclickpage("")} />} />
          <Route path="experiences" element={<Experiences ready={()=> setclickpage("experiences")} />} />
          {/* <Route path="projets" element={<Projets ready={()=> setclickpage("projets")} data={list} />} /> */}
          <Route path="services" element={<Services ready={()=> setclickpage("services")} />} />
          <Route path="socials" element={<Socials ready={()=> setclickpage("socials")} />} />
          <Route path="*" element={<NoPage ready={()=> setclickpage("404")} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
