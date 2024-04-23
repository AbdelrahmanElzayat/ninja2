import React from "react";
import locationTest from "../../../assets/images/locationTest.jpg";
const LocationCard = ({ item }) => {
  return (
    <div className="LocationCard">
      <div className="imgLocation">
        <img src={locationTest} alt="locationTest" />
      </div>
      <div className="locationCardContent">
        <h2>{item?.title}</h2>
        <p>{item?.address}</p>
        <p>{item?.working_hours}</p>
        {
            item?.phone_numbers?.map((item,i)=>(
                <p key={i}>{item}</p>
            ))
        }
      </div>
    </div>
  );
};

export default LocationCard;
