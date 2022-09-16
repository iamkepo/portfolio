import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Experiences = (props) => {
  const [step, setstep] = useState(0);
  
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

  const params = useParams();
  
  useEffect(()=>{
    props.ready();
    let stock = 0;
    experiences.forEach((item, i) => {
      if (i < parseInt(params.group)) {
        stock = stock + item.projets.length-1;
      }
    });
    setstep(stock);
  }, [props, experiences, params])
  
  const pred = () => {
    let group = parseInt(params.group);
    let item = parseInt(params.item);
    let limit = experiences[group-1] ? experiences[group-1].projets.length-1 : 0;
    if (item !== 0) {
      return "/experiences/"+group+"/"+(item-1);
    } else {
      return "/experiences/"+(group === 0 ? 0 : group-1)+"/"+limit;
    }
  }
  const next = () => {
    let group = parseInt(params.group);
    let item = parseInt(params.item);
    let limit = experiences[group].projets.length-1;
    let overfow = experiences.length-1;

    if (item < limit) {
      return "/experiences/"+group+"/"+(item+1);
    } else {
      return "/experiences/"+(group === overfow ? group : (group+1))+"/"+(group === overfow ? limit : 0);
    }
    
  }
  return (
    <div className="container">

      <div className="projets">

        <div className="big-title">Mes Expériences Professionelles</div>
        <div className="category">
          {
            experiences.map((item, i)=>(
              <Link to={"/experiences/"+i+"/0"}
                key={i} 
                className={i === parseInt(params.group) ? "category-item-active" : "category-item"}
              >
                {item.title} 
                <div className="number">{item.projets.length > 9 ? "": "0"}{item.projets.length} projet{item.projets.length > 1 ? "s": ""}</div> 
              </Link>
            ))
          }
        </div>

        <div className="caroussel">
          <div className="slide">
            <div className="polaroid shadow">
              <div className="img" style={{backgroundImage: experiences[parseInt(params.group)].projets[parseInt(params.item)].img}}></div>
              <div className="name">{experiences[parseInt(params.group)].projets[parseInt(params.item)].name}</div>
            </div>

            <div className="description">
              <div className="title">{experiences[parseInt(params.group)].projets[parseInt(params.item)].name}</div>
              <div className="text">{experiences[parseInt(params.group)].projets[parseInt(params.item)].description}</div>
              <div className="number">{experiences[parseInt(params.group)].projets[parseInt(params.item)].date}</div>
              <a href={experiences[parseInt(params.group)].projets[parseInt(params.item)].link} className="more"> Voir + </a>
            </div>
          </div>

        </div>

        <div className="passeur">
          <Link className="passeur-item" to={pred()}> 
            <i className="fas fa-arrow-left"></i> 
          </Link>
          <div className="passeur-number">
            {step+1}
            {" / "}
            {experiences.map(item => item.projets.length).reduce((total, num) => (total + num))}
          </div>
          <Link className="passeur-item" to={next()}> 
            <i className="fas fa-arrow-right"></i> 
          </Link>
        </div>

      </div>

      <div className="details">
        <div className="details-title">
          Liste des Projets
        </div>
        <div className="details-list">
          {
            experiences[parseInt(params.group)].projets.map((item, i)=>(
              <Link to={"/experiences/"+parseInt(params.group)+"/"+i}
                key={i} 
                className={i === parseInt(params.item) ? "list-item list-item-active" : "list-item"}
              >
                {item.name} 
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Experiences;