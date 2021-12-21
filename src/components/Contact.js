import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <section id="contactame" className="sec3 contact">
            <h2>Contáctame</h2>
            <div>
                <div className="contact_imgs">
                <a className="contact_svg" href="https://www.linkedin.com/in/luis-simosa-43b860112/"><img src="https://img.icons8.com/ios-filled/50/0000ff/linkedin.png" alt="LinkedIn Logo"/></a> 
                <a className="contact_svg" href="https://api.whatsapp.com/send?phone=+541126731105"><img src="https://img.icons8.com/ios-filled/50/0000ff/whatsapp--v1.png" alt="WhatsApp Logo"/></a> 
                <a className="contact_svg" href="mailto:simosa37@gmail.com"><img src="https://img.icons8.com/ios-filled/50/0000ff/gmail-new.png" alt="Gmail Logo" /></a> 
            </div>
            </div>
            <div>
            <h3>Puedes mirar un poco más de mi trabajo en:</h3>
            <div className="contact_imgs">
                <div className="contact_imgs_cont">
                    <p className="para">Mi perfil de GitHub</p>
                    <a className="contact_svg" href="https://github.com/luissimosa199"><img src="https://img.icons8.com/ios-filled/50/0000ff/github.png" alt="GitHub Logo" /></a></div>
                <div className="contact_imgs_cont">
                    <p className="para">Mi perfil de CodePen</p>
                    <a className="contact_svg" href="https://codepen.io/luissimosa25/pens/public"><img src="https://img.icons8.com/ios-filled/50/0000ff/codepen.png" alt="CodePen Logo" /></a></div>
                <div className="contact_imgs_cont">
                    <p className="para">Mi página de FreeCodeCamp</p>
                    <a className="contact_svg" href="https://www.freecodecamp.org/luissimosa"><img src="https://img.icons8.com/windows/50/0000ff/free-code-camp.png" alt="FCC Logo" /></a></div>
            </div>
            </div>
        </section>
    );
}