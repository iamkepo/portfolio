// ecran noir
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const handleFullscreenChange = () => {
      console.log("Fullscreen change");
      if (!document.fullscreenElement) {
        console.log("Fullscreen exit");
        setShowOverlay(false);
      } else {
        console.log("Fullscreen enter");
        setTimeout(() => {
          console.log("Fullscreen show");
          setShowOverlay(true);
          document.getElementById("overlay").classList.add('scintille');
          handleExit();
        }, 5000);
      }
    };
    
    window.addEventListener("fullscreenchange", handleFullscreenChange);
    
    return () => {
      window.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleExit = () => {
    setTimeout(() => {
      document.getElementById("overlay").classList.remove('scintille');
      setTimeout(() => {
        setShowButton(true);
      }, 5000);
    }, 5000);
  };


  const closeFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    setShowOverlay(false);
    setShowButton(false);
  };

  return (
    <div 
      id="overlay"
      style={{ 
        display: showOverlay ? "flex" : "none", 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "black", 
        zIndex: 10000
      }} 
    >
        <Button variant="primary" onClick={closeFullscreen} style={{ display: showButton ? "block" : "none" }}>Close</Button>
    </div>
  );
};
export default Overlay;