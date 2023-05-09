import { Container, Row, Col } from "react-bootstrap";
import Home from "../home/home.component";
import "./garbage.styles.css";
import garbageImg1 from "../../imgs/garbage1.png";
import garbageImg2 from "../../imgs/garbage3.png";
import garbageGif1 from "../../gif/garbage-gif1.gif";
import garbageGif2 from "../../gif/garbage-gif2.gif";
import garbageGif3 from "../../gif/garbage-gif3.gif";
import garbageGif4 from "../../gif/garbage-gif4.gif";

const Garbage = () => {
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
          className="garbage-container"
          sm={{ span: 12 }}
          md={{ span: 7 }}
          lg={{ span: 9 }}
          xl={{ span: 9 }}
        >
         <Col className="garbage-col1">
            <img src={garbageImg1} alt="garbage-img1" className="garbage-img1" />
         </Col>
        <Col className="garbage-col2" xs={6}>
        <p className="garbage-text">
              As an adult remembering when an empty streets used to be full of
              adventure, seeing all of the trash laying around, wondering to
              what could be done with all of the items lost to the time.
              Imagining all the ways it could be rebuilt and given second life
              to, actually listen to the stories of old unwanted family members
              who are alone on the streets with no one to listen. This mindset
              has stuck to me to this day when every new place is a scavenger
              hunt of all the trash around, every sidewalk corner can hide a the
              treasure that in good hands can be even more then before.
            </p>
            <h2 className="garbage-header">
              Chair is constructed by collecting and stealing items on a single
              street of Tbilisi
            </h2>
            <div className="gif-img-div1">
            <img src={garbageGif1} alt="garbage-gif1" className="garbage-gif1" />
            <img src={garbageGif2} alt="garbage-gif2" className="garbage-gif2" />
            </div>
            <div className="gif-img-div2">
            <img src={garbageGif3} alt="garbage-gif3" className="garbage-gif3" />
            <img src={garbageGif4} alt="garbage-gif4" className="garbage-gif4" />
            </div>
          
            
          
        </Col>
        <Col className="garbage-col3" xs lg="2">
        <img src={garbageImg2} alt="garbage-img2" className="garbage-img2" />
        </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Garbage;