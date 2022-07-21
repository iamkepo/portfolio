import { useEffect, useState } from "react";
const Experiences = (props) => {
  const experiences = [
    {
      title: "Personnels",
      projets: [
        {
          name: "Pixelswar",
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
      title: "Prestations",
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

  const [step, setstep] = useState(0);
  const [next, setnext] = useState(0);

  useEffect(()=>{
    props.ready()
  }, [props])

  return (
    <div className="container">

      <div className="projets">

        <div className="big-title">Mes Expériences Professionelles</div>
        <div className="category">
          {
            experiences.map((item, i)=>(
              <div 
                key={i} 
                className={i === step ? "category-item category-item-active" : "category-item"}
                onClick={()=> {setnext(0); setstep(i)}}
              >
                {item.title} 
                <div className="number">{item.projets.length > 9 ? "": "0"}{item.projets.length} projet{item.projets.length > 1 ? "s": ""}</div> 
              </div>
            ))
          }
        </div>

        <div className="caroussel">
          <div className="slide">
            <div className="polaroid shadow">
              <div className="img" style={{backgroundImage: experiences[step].projets[next].img}}></div>
              <div className="name">{experiences[step].projets[next].name}</div>
            </div>

            <div className="description">
              <div className="title">{experiences[step].projets[next].name}</div>
              <div className="text">{experiences[step].projets[next].description}
              </div>
              <a href={experiences[step].projets[next].link} className="more"> Voir + </a>
            </div>
          </div>

        </div>

        <div className="passeur">
          <div className="passeur-item" onClick={()=> (next !== 0) && setnext(next-1)}> <i className="fas fa-arrow-left"></i> Précédent </div>
          <div className="passeur-item" onClick={()=> (experiences[step].projets.length-1 !== next) &&setnext(next+1)}> Suivent <i className="fas fa-arrow-right"></i> </div>
        </div>

      </div>

      <div className="details">
        <div className="details-title">
          Liste des Projets
        </div>
        <div className="details-list">
          {
            experiences[step].projets.map((item, i)=>(
              <div 
                key={i} 
                className={i === next ? "list-item list-item-active" : "list-item"}
                onClick={()=>setnext(i)}
              >
                {item.name} 
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Experiences;