import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Container } from "react-bootstrap";
import hero_img from "../../../assets/images/ImgHero.png";
import appStore from "../../../assets/images/appStore.png";
import googlePlay from "../../../assets/images/googlePlay.png";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="hero">
      <div className="overlay"></div>
      <Container>
        <div className="heroContainer">
          <div className="contentHero">
            {isMobile ? (
              <h2>نينجا هوم كل خدمات بيتك ب تكه زرار</h2>
            ) : (
              <h2>
                نينجا هوم
                <br />
                كل خدمات بيتك
                <br />ب تكة زرار
              </h2>
            )}
            <p>حمل التطبيق و استمتع الان بتجربه الخدمات</p>
            <div className="downloadBtns">
              <a href="##">
                <img src={appStore} alt="appStore" />
              </a>
              <a href="##">
                <img src={googlePlay} alt="googlePlay" />
              </a>
            </div>
          </div>
          <div className="hero_img">
            <img src={hero_img} alt="mobilesHero" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
