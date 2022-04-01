import Carousel from "react-bootstrap/Carousel";
import CajaDeColores from "./CajaDeColores";
import BowTwistCard from "./BowTwistCard";
import TypewriterFX from "./TypewriterFX";

const About = () => {
  return (
    <section id="about">
    <Carousel>
      <Carousel.Item>
        <div className='carousel_img_container vh-100 overflow-hidden'>
          <TypewriterFX />
        </div>
        <Carousel.Caption>
          <div className='carousel_caption_container'>
            <h3 className="display-4">Hola!</h3>
            <p>
              Me llamo Luis, soy desarrollador web. Actualmente trabajo con React para elaborar
              páginas atractivas, interesantes, rápidas, estables y funcionales.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className='carousel_img_container vh-100 overflow-hidden'>
          <CajaDeColores/>
        </div>
        <Carousel.Caption>
          <div className='carousel_caption_container'>
            <h3 className="display-4">Mis intereses:</h3>
            <p>
              Además estoy interesado en las animaciones web (CSS), la accesibilidad y en general en la
              resolución de problemas en el día a día con las herramientas web.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className='carousel_img_container vh-100 overflow-hidden'>
          <BowTwistCard />
        </div>
        <Carousel.Caption>
          <div className='carousel_caption_container'>
            <h3 className="display-4">Bienvenido</h3>
            <p>
              En este portafolio podrás encontrar los proyectos que he desarrollado hasta ahora, medios de contacto
              y otras páginas en la que podrás conocer un poco más de mi trabajo.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
};

export default About;
