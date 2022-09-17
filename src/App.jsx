import { Routes, Route, HashRouter } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

const experiences = [
  {
    title: "Collaborations en entreprises",
    projets: [
      {
        name: "Classe 19",
        img: "url('./Tablette.png')",
        link: "https://classe19.com/",
        description: "Classe19 est une tablette éducative donnant un accès continu à tout un ensemble de ressources éducatives dans les matières principales (Mathématiques, PCT, SVT, Français et Anglais).",
        date: "2020-2021"
      },
      {
        name: "PharMap",
        img: "url('./phone.png')",
        link: "https://pharmap.co",
        description: "PharMap est une appication qui te permet de trouve le médicament que tu cherches en un clic partout au Bénin",
        date: "2021"
      },
      {
        name: "Sentinelle",
        img: "url('./sentinelle.webp')",
        link: "",
        description: "Visite technique, assurance, TVM et bien plus encore… voici autant de documents et pièces qu’il faut absolument garder à jour en tant que propriétaire de voiture.",
        date: "2021"
      },
    ],
  },
  {
    title: "Prèstations de services",
    projets: [
      {
        name: "D2A",
        img: "url('./d2a.png')",
        link: "https://d2a.swiitch.design/",
        description: "DU PROFESSIONNALISME AU SERVICE DU DROIT ET DE LA JUSTICE, Nous vous accompagnons dans la recherche de solutions à vos difficultés et anticipons sur vos situations heureuses ou moins favorables.",
        date: "2020"
      },
    ],
  },
  {
    title: "Projets personnels",
    projets: [
      {
        name: "Pixels war",
        img: "url('./pixelswar.png')",
        link: "https://pixelswar.herokuapp.com/",
        description: "Il s'agit d'un jeu web",
        date: "2021-2022"
      },
      {
        name: "World Cube",
        img: "url('./w_cube.png')",
        link: "https://iamkepo.github.io/w_cube/",
        description: "Il s'agit d'un monde 3D en cube",
        date: "2021-2022"
      },
      {
        name: "World Sphère",
        img: "url('./w_sphere.png')",
        link: "https://iamkepo.github.io/w_sphere/",
        description: "Il s'agit d'un monde 3D en sphère",
        date: "2022"
      },
      {
        name: "Mon portfolio",
        img: "url('./portfolio.png')",
        link: "https://iamkepo.github.io/portfolio/",
        description: "Il s'agit de mon portfolio",
        date: "2022"
      },
    ],
  }
];
function App() {
  const [clickpage, setclickpage] = useState(window.location.pathname);
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout clickpage={clickpage} />}>
          <Route index element={<Home ready={()=> setclickpage("")} />} />
          <Route 
            path="experiences/:group/:item" 
            element={<Experiences ready={()=> setclickpage("experiences")} experiences={experiences} />} 
          />
          <Route path="services" element={<Services ready={()=> setclickpage("services")} />} />
          <Route path="contact" element={<Contact ready={()=> setclickpage("contact")} />} />
          <Route path="*" element={<NoPage ready={()=> setclickpage("404")} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
