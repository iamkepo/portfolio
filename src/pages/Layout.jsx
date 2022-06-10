import { useEffect } from "react";
import { Outlet, Link} from "react-router-dom";

const Layout = (props) => {

  useEffect(()=>{
    //console.log(window.innerWidth);
    if (window.innerWidth > 500) {

      var cursor = document.querySelector('.cursor');
      var cursorinner = document.querySelector('.cursor2');

      cursor.style.display = "block";
      cursorinner.style.display = "block";

      document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
      });
      
    }
    
  }, [])
  
  return (
    <>

      <div className="header">
        <div className="logo">
          <Link to="/" className={props.clickpage === "" ? "logo-box logo-box-active" : "logo-box"}>
            <div className="logo-text"> I AM </div>
            <div className="logo-text back-text"> K E P O </div>
          </Link>
        </div>
        <div className="menu">
          <Link to="/experiences" className={props.clickpage === "experiences" ? "menu-item menu-item-active" : "menu-item"}>Expériences</Link>
          <Link to="/projets" className={props.clickpage === "projets" ? "menu-item menu-item-active" : "menu-item"}>Projets</Link>
          <Link to="/services" className={props.clickpage === "services" ? "menu-item menu-item-active" : "menu-item"}>Services</Link>
          <Link to="/socials" className={props.clickpage === "socials" ? "menu-item menu-item-active" : "menu-item"}>Socials</Link>
        </div>
      </div>

      <Outlet />

      <div className="cursor"></div>
      <div className="cursor2"></div>

    </>
  )
};

export default Layout;