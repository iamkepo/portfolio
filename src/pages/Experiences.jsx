import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Experiences = (props) => {
  const experiences = [
    {
      title: "Projets personnels",
      projets: [
        {
          name: "Pixels war",
          img: "",
          link: "https://pixelswar.herokuapp.com/",
          description: "Il s'agit d'un jeu web",
          date: ""
        },
        {
          name: "World Cube",
          img: "",
          link: "https://iamkepo.github.io/w_cube/",
          description: "Il s'agit d'un monde 3D en cube",
          date: ""
        },
        {
          name: "World Sphère",
          img: "",
          link: "https://iamkepo.github.io/w_sphere/",
          description: "Il s'agit d'un monde 3D en sphère",
          date: ""
        },
        {
          name: "Mon portfolio",
          img: "",
          link: "https://iamkepo.github.io/portfolio/",
          description: "Il s'agit de mon portfolio",
          date: ""
        },
      ],
    },
    {
      title: "Collaborations",
      projets: [
        {
          name: "Classe 19",
          img: "url('./Tablette.png')",
          link: "https://classe19.com/",
          description: "Classe19 est une tablette éducative donnant un accès continu à tout un ensemble de ressources éducatives dans les matières principales (Mathématiques, PCT, SVT, Français et Anglais).",
          date: ""
        },
        {
          name: "PharMap",
          img: "url('./phone.png')",
          link: "https://pharmap.co",
          description: "PharMap est une appication qui te permet de trouve le médicament que tu cherches en un clic partout au Bénin",
          date: ""
        },
        {
          name: "Sentinelle",
          img: "url('./sentinelle.webp')",
          link: "",
          description: "Visite technique, assurance, TVM et bien plus encore… voici autant de documents et pièces qu’il faut absolument garder à jour en tant que propriétaire de voiture.",
          date: ""
        },
      ],
    },
    {
      title: "Prèstations",
      projets: [
        {
          name: "D2A",
          img: "",
          link: "https://d2a.swiitch.design/",
          description: "DU PROFESSIONNALISME AU SERVICE DU DROIT ET DE LA JUSTICE, Nous vous accompagnons dans la recherche de solutions à vos difficultés et anticipons sur vos situations heureuses ou moins favorables.",
          date: ""
        },
      ],
    }
  ];

  const params = useParams();
  
  useEffect(()=>{
    props.ready();
  }, [props])
  return (
    <div className="container">

      <div className="projets">

        <div className="big-title">Mes Expériences Professionelles</div>
        <div className="category">
          {
            experiences.map((item, i)=>(
              <Link to={"/experiences/"+i+"/0"}
                key={i} 
                className={i === parseInt(params.group) ? "category-item category-item-active" : "category-item"}
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
              <div className="text">{experiences[parseInt(params.group)].projets[parseInt(params.item)].description}
              </div>
              <a href={experiences[parseInt(params.group)].projets[parseInt(params.item)].link} className="more"> Voir + </a>
            </div>
          </div>

        </div>

        <div className="passeur">
          <Link className="passeur-item" to={"/experiences/"+parseInt(params.group)+"/"+(parseInt(params.item) !== 0 ? (parseInt(params.item)-1) : 0)}> 
            <i className="fas fa-arrow-left"></i> 
            Précédent 
            </Link>
          <Link className="passeur-item" to={"/experiences/"+parseInt(params.group)+"/"+(experiences[parseInt(params.group)].projets.length-1 > parseInt(params.item) ? (parseInt(params.item)+1) : experiences[parseInt(params.group)].projets.length-1)}> 
            Suivent <i className="fas fa-arrow-right"></i> 
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