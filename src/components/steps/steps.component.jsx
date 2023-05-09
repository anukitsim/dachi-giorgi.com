import "./steps.styles.css";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";
import Home from "../home/home.component";

const Steps = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="home-container" xs={12} md={6} lg={2} xxl={2} style={{ paddingLeft: 0 }}>
          <Home />
        </Col>
        <Col className="steps-container d-flex flex-column justify-content-end" xs={12} md={6} lg={9} xxl={9} >
          <div className="video-wrapper">
            <ReactPlayer
              url="https://vimeo.com/818803846"
              className="video-steps"
              controls
              volume={1}
              width="100%"
              height="100%"
            />
          </div>
          <div className="steps-captions">
            <p className="steps-caption1">Animated and Produced for</p>
            <p className="steps-caption2">
              <a
                className="music-link"
                href="https://www.youtube.com/watch?v=lBEGDRO8N2g"
              >
                Steps ft. MNEK & Saul Williams
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Steps;