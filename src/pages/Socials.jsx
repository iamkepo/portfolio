import { useEffect } from "react";
const Socials = (props) => {
  const socials = [
    {link: "https://web.facebook.com/christamour.kakpo.5", icon: "fa fa-facebook", text: "christamour.kakpo.5"},
    {link: "https://twitter.com/ChristAmourKak1?t=vssD-u-B_eOthQpSozXy_A&s=09", icon: "fa fa-twitter", text: "ChristAmourKak1"},
    {link: "https://www.linkedin.com/in/christ-amour-kakpo-223b61172", icon: "fa fa-linkedin", text: "christ-amour-kakpo"},
    {link: "https://youtube.com/channel/UCGXcAnRnLBJ7ZdI_4H2jOrw", icon: "fa fa-youtube", text: "Chaine youtube"},
    {link: "https://instagram.com/i_am_kepo?igshid=YmMyMTA2M2Y=", icon: "fa fa-instagram", text: "i_am_kepo"},
    {link: "https://wa.me/22996772269", icon: "fa fa-whatsapp", text: "+229 96772269"},
    {link: "https://github.com/iamkepo", icon: "fa fa-github", text: "iamkepo"},
  ]
  useEffect(()=>{
    props.ready()
  }, [props])
  return (
    <div className="container">

      <div className="socials">

        <div className="big-title">A Propos De Moi</div>
        <div className="socials-list">
          {
            socials.map((item, i)=>(
              <a key={i} className="social-item" href={item.link} style={{ animation: "transx "+(1+i)+"s" }}> 
                <span className={item.icon}></span> 
                {item.text}
              </a>
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default Socials;