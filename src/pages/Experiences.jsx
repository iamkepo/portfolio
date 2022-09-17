import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Experiences = (props) => {

  const [step, setstep] = useState([]);

  const params = useParams();

  useEffect(()=>{
    props.ready();
    let stock = [];
    props.experiences.forEach((group, i) => {
      group.projets.forEach((item, j) => {
        if (i <= parseInt(params.group) && j <= parseInt(params.item)) {
          stock = stock.concat(item);
        }
      })
    });
    setstep(stock);
  }, [props, params])
  
  const pred = () => {
    let group = parseInt(params.group);
    let item = parseInt(params.item);
    let limit = props.experiences[group-1] ? props.experiences[group-1].projets.length-1 : 0;
    if (item !== 0) {
      return "/experiences/"+group+"/"+(item-1);
    } else {
      return "/experiences/"+(group === 0 ? 0 : group-1)+"/"+limit;
    }
  }
  
  const next = () => {
    let group = parseInt(params.group);
    let item = parseInt(params.item);
    let limit = props.experiences[group].projets.length-1;
    let overfow = props.experiences.length-1;

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
            props.experiences.map((item, i)=>(
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
              <div className="img" style={{backgroundImage: props.experiences[parseInt(params.group)].projets[parseInt(params.item)].img}}></div>
              <div className="name">{props.experiences[parseInt(params.group)].projets[parseInt(params.item)].name}</div>
            </div>

            <div className="description">
              <div className="title">{props.experiences[parseInt(params.group)].projets[parseInt(params.item)].name}</div>
              <div className="text">{props.experiences[parseInt(params.group)].projets[parseInt(params.item)].description}</div>
              <div className="number">{props.experiences[parseInt(params.group)].projets[parseInt(params.item)].date}</div>
              <a href={props.experiences[parseInt(params.group)].projets[parseInt(params.item)].link} className="more"> Voir + </a>
            </div>
          </div>

        </div>

        <div className="passeur">
          <Link className="passeur-item" to={pred()}> 
            <i className="fas fa-arrow-left"></i> 
          </Link>
          <div className="passeur-number">
            {step.length}
            {" / "}
            {props.experiences.map(item => item.projets.length).reduce((total, num) => (total + num))}
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
            props.experiences[parseInt(params.group)].projets.map((item, i)=>(
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