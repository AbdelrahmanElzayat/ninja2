import React from "react";
import "./AdvantageCard.css";
const AdvantageCard = (props) => {
  return (
    <div className="AdvantageCard">
      <div className="AdvantageCardImg">
        <img src={props.image} alt="advntageCardImg" />
      </div>
      <div className="AdvantageCardContent">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default AdvantageCard;
