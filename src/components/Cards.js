import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Placeholder from "react-bootstrap/Placeholder";
import { useState, useEffect } from "react";

const Cards = () => {
  let fakeCards = [];

  (() => {
    for (let i = 0; i < 3; i++) {
      fakeCards.push(
        <Col key={i}>
          <Card
            style={{
              width: "45ch",
              height: "35rem",
              margin: "1em auto",
              padding: ".5em",
            }}>
            <Card.Img style={{ objectFit: "contain", height: "50%" }} />

            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
              <Placeholder as={Card.Title} animation='glow'>
                <Placeholder xs={6} />
              </Placeholder>

              <Placeholder as={Card.Text} animation='glow'>
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>

              <Placeholder.Button variant='primary' className='w-100' />
            </Card.Body>
          </Card>
        </Col>
      );
    }
  })();

  const [skeletons, setProjects] = useState(fakeCards);

  useEffect(() => {
    axios
      .get("./project-data.json")
      .then((res) => {
        let projects = [];

        res.data.map((e) => {
          return projects.push(
            <Col key={e.name}>
              <Card
              className="box-shadow"
                style={{
                  maxWidth: "45ch",
                  height: "35rem",
                  margin: "1em auto",
                  padding: ".5em",
                }}
                >
                <Card.Img
                  src={e.imgSrc}
                  alt={e.name + "Logo"}
                  style={{ objectFit: "contain", height: "50%" }}
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                  <Card.Title as='h3'>{e.name}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>

                  <ButtonGroup size='lg'>
                    <Button className='w-100' href={e.codeLink}>
                      Código
                    </Button>
                    <Button className='w-100' href={e.liveLink}>
                      Link
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          );
        });
        
        setProjects(projects);
        
      })
      .catch((err) => console.log("ERROR: ", err));
  }, []);

  return (
    <Container>
      <CardGroup style={{ minWeight: "100vh", justifyContent: "center" }}>
        <Row xl={2} xxl={3}>
          {skeletons}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default Cards;
