import { useEffect, useState } from "react";

const Contact = (props) => {
  const [nom, setnom] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const socials = [
    {link: "https://web.facebook.com/christamour.kakpo.5", icon: "fa fa-facebook", text: "christamour.kakpo.5"},
    {link: "https://twitter.com/ChristAmourKak1?t=vssD-u-B_eOthQpSozXy_A&s=09", icon: "fa fa-twitter", text: "ChristAmourKak1"},
    {link: "https://www.linkedin.com/in/christ-amour-kakpo-223b61172", icon: "fa fa-linkedin", text: "christ-amour-kakpo"},
    {link: "https://youtube.com/channel/UCGXcAnRnLBJ7ZdI_4H2jOrw", icon: "fa fa-youtube", text: "Chaine youtube"},
    {link: "https://instagram.com/i_am_kepo?igshid=YmMyMTA2M2Y=", icon: "fa fa-instagram", text: "i_am_kepo"},
    {link: "https://wa.me/22996772269", icon: "fa fa-whatsapp", text: "+229 96772269"},
    {link: "https://github.com/iamkepo", icon: "fa fa-github", text: "iamkepo"},
  ];

  useEffect(()=>{
    props.ready()
  }, [props])

  const send = (e) => {
    e.preventDefault();
    let data = {
      nom: nom,
      email: email,
      message: message
    };
    for (const key in data) {
      if (data[key] === "") {
        alert("Le champ "+key+" est vide");
        return;
      }
    }
    // setnom("");
    // setemail("");
    // setmessage("");
    //alert(JSON.stringify(data))
    alert("Désolé votre message ne peut être envoyer actuellement")
  }

  return (
    <div className="container">

      <div className="projets">

        <div className="big-title">Me contacter</div>

        <form className="send-email" method="POST">

          <input className="input-item" type="text" onChange={(e)=> setnom(e.target.value)} placeholder="Votre Nom" value={nom} />
          
          <input className="input-item" type="text" onChange={(e)=> setemail(e.target.value)} placeholder="Votre Addresse Email" value={email} />
          
          <textarea className="input-item" onChange={(e)=> setmessage(e.target.value)}  placeholder="Votre Message" style={{height: "40%"}} value={message} ></textarea>

          <input className="foot" type="submit" value="Submit" onClick={(e)=> send(e)}/>

        </form>
        
      </div>
      <div className="details">
        <div className="details-title">
          Mes réseaux sociaux
        </div>
        <div className="socials-list">
          {
            socials.map((item, i)=>(
              <a key={i} className="social-item" href={item.link}> 
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

export default Contact;