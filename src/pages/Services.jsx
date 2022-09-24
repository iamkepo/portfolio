import { useEffect } from "react";
const Services = (props) => {
  const carts = [
    {
      title: "Standard",
      offres: ["-Site Web Vitrine (ou Landing page)"],
      forfait: 999,
      desc: "Il s'agira de créer pour vous un site web Vitrine avec un service de designer intéger mais sans back-end"
    },
    {
      title: "Silver",
      offres: ["-Application Web", "(Blog, E-commerce, E-learning...)", "-Dashboard"],
      forfait: 4999,
      desc: "Il s'agira de créer pour vous un site web Blog, E-commerce, ...; avec un service de designer intéger et avec un back-end"
    },
    {
      title: "Gold",
      offres: ["-Application Mobile", "(Bonus un Landing page)", "-Dashboard"],
      forfait: 5999,
      desc: "Il s'agira de créer pour vous une appication Mobile Android ou IOS avec un service de designer intéger et avec un back-end"
    },
    {
      title: "Diamond",
      offres: ["-Application Mobile", "-Application Web", "-Dashboard"],
      forfait: 9999,
      desc: "Il s'agira de créer pour vous un site web Blog, E-commerce, ...; une appication Mobile Android ou IOS avec un service de designer intéger et avec un back-end"
    },
  ];
  useEffect(()=>{
    props.ready()
  }, [props])
  return (
    <div className="container">

      <div className="services">

        <div className="big-title">Mes Services</div>

        <div className="carts">
          {
            carts.map((item, i)=>(
            <div className="box" key={i} style={{ animation: "transx "+(1+i)+"s" }}>
              <div className="box-inner">
                <div className="box-front">
                  <div className="bgwhite">
                    <h1>{item.title}</h1>
                    <div className="offres">
                      {item.offres.map((ite, j)=>(<h3 key={j}>{ite}</h3>))}
                    </div>
                    <div className="forfait">{item.forfait} EUROS</div>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
                <div className="box-back">
                  <a href={"https://wa.me/22996772269?text="+item.title+""} className="btn-contact">Contactez nous</a>
                </div>
              </div>
            </div>
            ))
          }
        </div>

      </div>
      
    </div>
  );
};

export default Services;