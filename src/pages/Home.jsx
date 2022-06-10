import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Home = (props) => {
  const photos = [
    "url('./IMG_20220414_083526_888.jpg')",
    "url('./IMG_20220102_120225_359.jpg')",
    "url('./IMG_20220105_095412_378.jpg')",
    "url('./IMG_20220106_094022_003.jpg')",
    "url('./IMG_20220102_220726_801.jpg')",
    "url('./IMG_20220126_121921_848.webp')",
    "url('./IMG_20220113_100530_940.webp')",
    "url('./IMG_20220320_200106_675.webp')",
  ];
  const competences = [
    { name: "C", progress: 90 },
    { name: "C++", progress: 70 },
    { name: "HTML", progress: 80 },
    { name: "CSS", progress: 90 },
    { name: "SASS", progress: 50 },
    { name: "Bootstrap CSS", progress: 70 },
    { name: "Tailwind CSS", progress: 80 },
    { name: "JavaScript", progress: 90 },
    { name: "Vue JS", progress: 90 },
    { name: "Nuxt JS", progress: 80 },
    { name: "NativeScript Vue", progress: 70 },
    { name: "React JS", progress: 100 },
    { name: "Next JS", progress: 80 },
    { name: "React Native", progress: 100 },
    { name: "Firebase", progress: 60 },
    { name: "Node JS", progress: 80 },
    { name: "Express JS", progress: 90 },
    { name: "Socket.io", progress: 70 },
    { name: "MongoDB", progress: 80 },
    { name: "PHP", progress: 80 },
    { name: "MySQL", progress: 80 },
    { name: "Three JS", progress: 70 },
  ];
  const [photo, setphoto] = useState(photos[0]);
  
  useEffect(()=>{
    props.ready()
  }, [props])
  return (
    <div className="container">

      <div className="projets">

        <div className="big-title">Mon Profile</div>

        <div className="profile">

          <div className="photo-box">

            <div className="photo-img shadow" style={{backgroundImage: photo}}></div>
            <div className="photo-other">
              {
                photos.map((item, i)=>(
                  <div key={i} className={item === photo ? "other-item other-item-active" : "other-item"} onClick={()=>setphoto(item)}></div>
                ))
              }
            </div>

          </div>

          <div className="presentation">

            <div className="first">
              KAKPO
            </div>
            <div className="last">
              Christ-Amour  Dieu-Merci
            </div>
            <div className="text">
              Je suis <span className="strong">développeur</span> d'applications  <span className="strong">WEB </span>, 
              <span className="strong"> Mobile</span> et <span className="strong"> Desktop</span> 
            </div>
            <div className="text">
              J'ai également une assez bonne maitrise des langages de programmations et frameworks que j'ai eu à cité dans mes compétences.
            </div>

          </div>

        </div>

        <div className="foot">
        <Link to="/experiences" className="foot-more"> C o m m e n c e r </Link>
        </div>

      </div>

      <div className="details">
        <div className="details-title">
          Mes compétences 
        </div>
        <div className="competences-list">
          {
            competences.map((item, i)=>(
              <div key={i} className="competence">
                <div className="competence-text">{item.name}</div> 
                <div className="competence-progress" style={{width: item.progress-35+"%"}}></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;