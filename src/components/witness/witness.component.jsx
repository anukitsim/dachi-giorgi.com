import "./witness.styles.css";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";
import Home from "../home/home.component";

const Witness = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          className="home-container"
          sm={{ span: 12 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
          xl={{ span: 2 }}
          style={{ paddingLeft: 0 }}
        >
          <Home />
        </Col>
        <Col
          className="witness-container"
          sm={{ span: 12 }}
          md={{ span: 7 }}
          lg={{ span:  9 }}
          xl={{ span: 9}}
        >
          <p className="witness-text1">
            Museum of Louvre, has extended
            an invitation to twenty young creative professionals to present
            their distinctive interpretation of the institution through the
            medium of a 3 minute film. The initiative, aptly named
            "Louvre Looks," endeavors to convene creatives under the age of
            forty and foster a new perspective on the museum's rich and diverse
            collections.
          </p>
          <p className="witness-text2">
            In collaboration with artist Mykki Blanco, within the perimeter of
            this legendary institution, we have put together a volume that
            speaks of nostalgia, time, and the human relationship with the
            concept of infinity. It incarnates the upper bourgeoisie, but also
            the Revolution and radical change. It is a space of power and
            contradiction, with a magic sparked by the many forms of cultural
            and political cohesion.
          </p>
          <div className="player-wrapper">
            <ReactPlayer
              url="https://vimeo.com/804685785"
              className="witness-video"
              controls
              volume={1}
              width="100%"
              height="100%"
            />
          </div>
          <p className="video-caption">Le Témoin / The Witness</p>
          <p className="video-caption2">
            © Mykki Blanco et Dachi-Giorgi Garuchava
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Witness;