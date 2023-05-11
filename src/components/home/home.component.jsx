import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./home.styles.css";
import backgroundVideo from "../../video/background-video.mp4";
import backgroundImg from "../../imgs/background-img.png";
import march32Background from "../../imgs/march32.png";
import gif from "../../gif/gif.mp4";
import psrAudio from "../../audio/psr.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showMarch32Background, setShowMarch32Background] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showGif, setShowGif] = useState(false);

  const location = useLocation();
  const audioRef = useRef(null);


  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove(
      "invasive-modification-body",
      "home-body",
      "thewitness-body",
      "STEPS-body",
      "obj-body",
      "dead-vase-body",
      "broken-city-body",
      "i-need-protection-body",
      "french-lessons-body",
      "garbage-throne-body",
      "about-body"
    );
    body.classList.add(`${location.pathname.substring(1)}-body`);
    setShowGif(location.pathname === "/psr");
    setShowBackground(location.pathname === "/hyphen");
    setShowMarch32Background(location.pathname === "/march32");
    setPlayAudio(location.pathname === "/psr");


    // if (location.pathname !== '/french-lessons') {
    //   body.classList.remove('french-lessons-body');
    // }
  }, [location.pathname]);

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const showVolumeControls = isMobile && location.pathname === "/psr";
 

  
 
  const handleAudioClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused && !isMuted) {
        audioRef.current.play().then(() => {
          audioRef.current.muted = false;
        });
      } else if (!audioRef.current.paused && isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.pause();
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };
  
  
  return (
    <Container fluid>
      <Row>
        <Col
          className="home-container"
          sm={{ span: 12 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
          xl={{ span: 2 }}
        >
          {showBackground && (
            <div id="video-container" className="background-container">
              <video
                className="background-video"
                id="fullscreen-video"
                src={backgroundVideo}
                key={`video-${location.pathname}`}
                style={{
                  position: "absolute",
                  width: "100vw",
                  height: "100%",
                  objectFit: "cover",
                }}
                autoPlay
                loop
                muted
                playsInline
              />
              <img
                className="background-img"
                key={`img-${location.pathname}`}
                src={backgroundImg}
                alt="background"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "160%",
                  opacity: 0.4,
                  objectFit: "cover",
                }}
              />
            </div>
          )}
          {showMarch32Background && (
            <img
              className="march-background-img"
              src={march32Background}
              alt="background"
              style={{
                position: "absolute",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          )}
          {showGif && (
            <video
              className="background-gif"
              src={gif}
              style={{ position: "absolute", objectFit: "cover" }}
              key={`video-${location.pathname}`}
              autoPlay
              loop
              muted
              playsInline
            />
          )}
           {/*
  Render the audio controls only if the user is on mobile
  */}
{isMobile && showVolumeControls && (
  <div className="mobile-volume-controls">

    <button
      className="volume-icon-button"
      onClick={handleAudioClick}
    >
      <FontAwesomeIcon
        icon={isMuted ? faVolumeMute : faVolumeUp}
      />
    </button>
  </div>
)}

{/*
  Render the audio element only if the user is on desktop
  */}
{!isMobile && playAudio && (
  <audio src={psrAudio} ref={audioRef} autoPlay loop playsInline />
)}


          <div
            className={
              isMobileMenuVisible ? "mobile-menu visible" : "mobile-menu"
            }
          >
            <h1 className="title">
              <Link to="/" className="title-link">
                DACHI-GIORGI GARUCHAVA
              </Link>
            </h1>
            <button className="menu-button" onClick={toggleMobileMenu}>
              Menu
            </button>
            <ul
              className={isMobileMenuVisible ? "info-links show" : "info-links"}
            >
              <li>
                <Link to="/about" className="info-link">
                  About
                </Link>
              </li>
            </ul>

            <ul
              className={
                isMobileMenuVisible ? "project-links show" : "project-links"
              }
            >
              <li>
                <Link
                  to="/thewitness"
                  className={
                    location.pathname === "/thewitness"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  The Witness
                </Link>
              </li>
              <li>
                <Link
                  to="/invasive-modification"
                  className={
                    location.pathname === "/invasive-modification"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  Invasive Modification
                </Link>
              </li>
              <li>
                <Link
                  to="/STEPS"
                  className={
                    location.pathname === "/STEPS"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  STEPS
                </Link>
              </li>
              <li>
                <Link
                  to="/hyphen"
                  className={
                    location.pathname === "/hyphen"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  Hyphen
                </Link>
              </li>
              <li>
                <Link
                  to="/i-need-protection"
                  className={
                    location.pathname === "/i-need-protection"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  I Need Protection
                </Link>
              </li>
              <li>
                <Link
                  to="/obj"
                  className={
                    location.pathname === "/obj"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  .OBJ
                </Link>
              </li>
              <li>
                <Link
                  to="/french-lessons"
                  className={
                    location.pathname === "/french-lessons"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  French Lessons
                </Link>
              </li>
              <li>
                <Link
                  to="/garbage-throne"
                  className={
                    location.pathname === "/garbage-throne"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  Garbage Throne
                </Link>
              </li>
              <li>
                <Link
                  to="/psr"
                  className={
                    location.pathname === "/psr"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  PSR
                </Link>
              </li>
              <li>
                <Link
                  to="/dead-vase"
                  className={
                    location.pathname === "/dead-vase"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  {" "}
                  Dead Vase
                </Link>
              </li>
              <li>
                <Link
                  to="/broken-city"
                  className={
                    location.pathname === "/broken-city"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  {" "}
                  Broken City
                </Link>
              </li>
              <li>
                <Link
                  to="/march32"
                  className={
                    location.pathname === "/march32"
                      ? "project-link current-page"
                      : "project-link"
                  }
                >
                  March32
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;