import { useEffect, useState } from "react";
import axios from "axios";
const Projets = (props) => {
  const [click, setclick] = useState(0);
  const [list, setlist] = useState([]);
  useEffect( ()=>{
    props.ready();
    if (props.data.length === 0) {
      axios({method: 'GET', url: "https://api.github.com/users/iamkepo/repos"})
      .then((response)=> {
        setlist(response.data);
      });
    }else{
      setlist(props.data);
    }
  }, [props]);
  return (
    <div className="container">

      <div className="projets">

        <div className="big-title">Mes Projets</div>
        <div className="projets-list">
          {
            list.map((item, i)=>(
              <div key={i} className={click === i ? "projet projet-active" : "projet"} onClick={()=> setclick(i)}>
                <div className="folder-name">{item.name}</div>
              </div>
            ))
          }
        </div>

      </div>

      <div className="details">
        <div className="details-title">
        {list.length > 0 && list[click].name}
        </div>
        <div className="detail-description">
          {list.length > 0 && <div className="text">Description: {list[click].description} </div>}
          {list.length > 0 && <div className="text">Language principal: {list[click].language} </div>}
          {
            (list.length > 0 && list[click].topics.length > 0) && 
            <div className="text">
              topics: {list[click].topics.map((item =>(item+" ")))} 
            </div>
          }
        </div>
        {list.length > 0 && <a href={list[click].html_url} className="list-item">Voir sur github</a>}
      </div>
      
    </div>
  );
};

export default Projets;