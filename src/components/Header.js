import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Container>

      <Navbar
        expand='sm'
        fixed='top'
        bg='light'
        className='justify-content-center justify-content-sm-start'
        >
        <Navbar.Brand className="mx-3 h1">Luis Simosa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>

          <Nav as='ul' className="text-center">
            <Nav.Item as='li'>
              <Nav.Link href="#about">Sobre Mi</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>

      </Navbar>

    </Container>
  );
};

export default Header;
