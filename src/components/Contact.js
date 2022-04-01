import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  const contactData = {
    linkedIn: {
      link: "https://www.linkedin.com/in/luis-simosa-43b860112/",
      icon: "https://img.icons8.com/ios-filled/100/000000/linkedin.png",
    },

    whatsapp: {
      link: "https://api.whatsapp.com/send?phone=+541126731105",
      icon: "https://img.icons8.com/ios-filled/100/000000/whatsapp--v1.png",
    },
    github: {
      link: "https://github.com/luissimosa199",
      icon: "https://img.icons8.com/ios-filled/100/000000/github.png",
    },
    codePen: {
      link: "https://codepen.io/luissimosa25/pens/public",
      icon: "https://img.icons8.com/ios-filled/100/000000/codepen.png",
    },
    freeCodeCamp: {
      link: "https://www.freecodecamp.org/luissimosa",
      icon: "https://img.icons8.com/windows/100/000000/free-code-camp.png",
    },
    "simosa37@gmail.com": {
      link: "mailto:simosa37@gmail.com",
      icon: "https://img.icons8.com/ios-filled/100/000000/gmail-new.png",
    },
  };

  return (
    <section id='contact'>
      <h2 className='ps-1'>Contacto y más:</h2>

      <Container>
        <Row xs={1} sm={3} >
        {Object.keys(contactData).map((e) => {
          return (
            <Col className="text-center" key={e}>
            <Figure className="text-center w-100">
              <a style={{ textDecoration: "none" }} className="text-capitalize text-muted h3" href={contactData[e].link}>
              <FigureImage className="w-25 my-2 text-shadow" src={contactData[e].icon} />
              <FigureCaption>
                <p>{e}</p>
              </FigureCaption>
              </a>
            </Figure>
            </Col>
          );
        })}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
