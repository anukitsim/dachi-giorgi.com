import "./obj.styles.css";
import { Container, Row, Col } from "react-bootstrap";
import objImg1 from '../../imgs/obj1.png';
import objText from '../../imgs/Text.png';
import objImg2 from '../../imgs/obj2.png';
import objImg3 from '../../imgs/obj3.png';
import objImg4 from '../../imgs/obj4.png';
import objImg5 from '../../imgs/obj5.png';

import Home from "../home/home.component";

const Obj = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={2} xxl={2} className="home-container" style={{ paddingLeft: 0 }}>
          <Home />
        </Col>
        <Col xs={12} sm={12} md={12} lg={8} xxl={9} className="obj-container">

        <div className="obj-div1">
        <img src={objImg1} alt="obg-img-1" className="obj-img1" />
          <div className="obj-text-div">
          <img src={objText} alt="obj-text" className="obj-text" />
          </div>
        
        </div>
        <div className="obj-div2">
        <h2 className="obj-img2-header">Roots.obj</h2>
        <img src={objImg2} alt="obg-img-2" className="obj-img2" />
        </div>
      
        </Col>
        <Row>
          <Col xs={10} md={6} lg={6} xl={6} xxl={6} className="obj-container2">
            <div className="obj-div3">
            <h2 className="obj-img3-header">Flask.obj</h2>
      <img src={objImg3} alt="obg-img-3" className="obj-img3" />
      <p className="obj-text3">Deciding whether to bring a bag for my bottle or buy one and contribute to environmental pollution with unnecessary plastic was an everyday dilemma. Drawing inspiration from a military-style flask, an ergonomic bottle that attaches to the side of the bottle came to existence.</p>
      <p className="obj-text3-part2">The holder for a metal bottle is constructed from sturdy resin and features a metal plate that securely clasps the bottle. By gently squeezing the holder from both sides, the bottle can be easily removed and reattached with equal simplicity.</p>
            </div>
            <div className="obj-div4">
               <div className="obj-div5">
               <img src={objImg4} alt="obg-img-4" className="obj-img4" />
               <img src={objImg5} alt="obg-img-5" className="obj-img5" />
               </div>
            </div>
          </Col>
        </Row>
      </Row>
      
    </Container>
  );
};

export default Obj;