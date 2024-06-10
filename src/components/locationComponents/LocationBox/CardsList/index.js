import React, { useContext, useEffect, useState } from "react";
import CardLocation from "./CardLocation.js";
import "./CardsList.css";
import { RegionContext } from "../../../../contextApi/RegionContext.js";

// import { useLottie } from "lottie-react";
import searchJson from "../../../../assets/searchJson.png";

const CardsList = () => {
  const { locations } = useContext(RegionContext);
  // const options = {
  //   animationData: searchJson,
  //   loop: true,
  // };
  // const { View } = useLottie(options);

  const [showLottie, setShowLottie] = useState(true);
  useEffect(() => {
    if (locations.length > 0) {
      setShowLottie(false);
    } else {
      setShowLottie(true);
    }
  }, [locations]);

  // showLottie
  return (
    <>
      <div className="CardsList">
        {locations?.length > 0
          ? locations?.map((item, index) => (
              <CardLocation item={item} key={index} />
            ))
          : showLottie && <img src={searchJson} alt="search"/>}
      </div>
    </>
  );
};

export default CardsList;
