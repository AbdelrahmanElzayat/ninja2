import React from "react";
import "./FooterDownload.css";
import googleStore from "../../../assets/images/googleStore.png";
import appStore from "../../../assets/images/appleStore.png";
import mockupninja from "../../../assets/images/mockupninja.png";
import oval6 from "../../../assets/images/oval6.png";
import { Container } from "react-bootstrap";

const FooterDownload = () => {
  return (
    <div className="FooterDownload">
      <div className="oval6">
        <img src={oval6} alt="oval6" />
      </div>
      <div className="oval7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="87"
          height="240"
          viewBox="0 0 87 240"
          fill="none"
        >
          <ellipse
            cx="108.411"
            cy="119.873"
            rx="119.165"
            ry="108.318"
            transform="rotate(92 108.411 119.873)"
            fill="#E91E63"
            fill-opacity="0.15"
          />
        </svg>
      </div>
      <Container>
        <div className="FooterDownload_stores">
          <div className="FooterDownload_stores_content">
            <h2>حمل تطبيق نينجا هوم</h2>
            <p>استمتع الان بالتطبيق و اعمل اول طلب مع نينجا بوت</p>
          </div>
          <div className="FooterDownload_stores_stores">
            <a href="https://apps.apple.com/eg/app/id6496852097" target="blank">
              <img src={appStore} alt="appStore" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=net.ninjaHome.app"
              target="blank"
            >
              <img src={googleStore} alt="googlePlay" />
            </a>
          </div>
        </div>
        <div className="mockupninja">
          <img src={mockupninja} alt="mockupninja" />
        </div>
      </Container>
    </div>
  );
};

export default FooterDownload;
