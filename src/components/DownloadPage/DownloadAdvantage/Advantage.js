import React from "react";
import './Advantage.css'
import AdvantageList from "./AdvantageList";
import Oval from '../../../assets/images/Oval.png'
import circles from '../../../assets/images/circles.png'
const Advantage = () => {
  return (
    <div className="AdvantageDownload">
        <div className="ovalImg">
            <img src={Oval} alt="oval"/>
        </div>
      <div className="MainHeadDownload">
        <h2>مميزات التطبيق</h2>
        <span>اهم ما يميز التطبيق</span>
      </div>
      <AdvantageList/>
      <div className="circles">
            <img src={circles} alt="circles"/>
        </div>
    </div>
  );
};

export default Advantage;
