import { Container, Row, Col } from "react-bootstrap";
import Home from "../home/home.component";
import "./about.styles.css";

const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          className="home-container"
          xs={12}
          md={4}
          lg={2}
          xxl={2}
          style={{ paddingLeft: 0 }}
        >
          <Home />
        </Col>

        <Col
          className="about-container"
          sm={{ span: 12 }}
          md={{ span: 7 }}
          lg={{ span: 9 }}
          xl={{ span: 9 }}
        >
          <Col className="about-col1">
            <p>
              From a core of Georgian Culture depicting near-semblances beyond
              normal and abnormal worlds through visual communication from
              Direction, Set Design, Metalworking to Digital Worlds with 2D
              Animation, CGI and Video Production
            </p>
            <p>ADRESS</p>
            <p>karl-Marx-Straße 206 12055 • Berlin • Germany</p>
            <p>CONTACT</p>
            <p>
              Dachigiorgigaruchava@gmail.com +49 157 53071293 • +995 557 600 769{" "}
            </p>
            <p> Instagram • Facebook</p>
            <p>EDUCATION</p>
            <p>
              2022-2023 • Universität der Künste Berlin • Product Design B.S.
              2021-2022 • Tbilisi State Academy of Arts • Book illustration B.S.
              2022 • Metalworking academy - Jewellery Course 2020-2021 • CGMA
              academy • Fundamentals to the modern 2D Animation Course and
              Character Design Course
            </p>
          </Col>
          <Col className="about-col2">
          <p>WORK</p>
          <p>
            2023 • “Louvre Looks” Film commissioned by Museum of Louvre <br /> 2022 •
            Creative Direction for Album “Stay Close To Music” • Mykki Blanco
            Band <br /> 2022 • 3D Animated Music Video “Steps” • Mykki Blanco Band  <br /> 2022
            • Creative Direction and Set Design • Invasive Modification  <br /> 2022 •
            Prop Design for Music Video “French Lessons” • Mykki Blanco  <br /> 2022 •
            Product Design for Le Chich Radical • Jewelry Brand  <br /> 2021-2022 •
            Visual Design for WEEW • Fashion Brand  <br /> 2021-2022 • Motion Design for
            Infinite Canvas • Broderick Shomaker  <br /> 2022 • 3D Design for GAMMA •
            NFT Collective  <br /> 2021 • Director/CG Artist for a short film “Kids of
            the Pink Trash”  <br /> 2021 • Concept Art for Planet Of Ants • NFT
            Collective  <br /> 2021 • CGI Animation for Yves Scherer  <br /> 2021 • NFT series
            “PSR”  <br /> 2020-2021 • Animation for We • Podcast Studio  <br /> 2019-2021 •
            Illustration for UKBAC • Creative Studio  <br /> 2020 • Actor, Animator and
            CGI artist for a film “Gamodi” by Felix Kalmenson  <br /> 2020 • Logo design
            for Batumi School of St. Andrew the First-Called  <br /> 2020 • Illustration
            for AWDF • African Women Development Fund  <br /> 2020 • Artwork for a
            French label Artefact  <br /> 2020 • Animation for a Holocaust documentary
            by Felix Kalmenson  <br /> 2018 • Album cover for Canadian musician “Basi
            Azurl”
          </p>
          </Col>
         
        </Col>
      </Row>
    </Container>
  );
};

export default About;