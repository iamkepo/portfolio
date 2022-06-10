import { useEffect } from "react";
const NoPage = (props) => {
  useEffect(()=>{
    props.ready()
  }, [props])
  return (
    <div className="container">

      <h1 style={{fontSize: "1000%", display: "flex", alignSelf: "center", margin: "0 auto", animation: "transy 2s"}}>404</h1>

    </div>
  );
};

export default NoPage;