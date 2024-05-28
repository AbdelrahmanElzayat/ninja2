import React from "react";
import "./DownApp.css";
import { Container } from "react-bootstrap";
import playStore from "../../../assets/images/button-Play.png";
import appStore from "../../../assets/images/button-app.png";
const DownApp = () => {
  return (
    <div className="DownApp">
      <Container>
        <h2>
          جميع خدمات صيانة الأجهزة المنزلية الان بضغطة زر
          <br />
          حمل التطبيق الان
        </h2>
        <div className="downBadges">
          <a href="https://play.google.com/store/apps/details?id=net.ninjaHome.app" target="blank">
            <img src={playStore} alt="" />
          </a>
          <a href="https://apps.apple.com/eg/app/id6496852097" target="blank">
            <img src={appStore} alt="" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default DownApp;
