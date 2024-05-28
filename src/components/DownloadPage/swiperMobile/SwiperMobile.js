import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import iphone from "../../../assets/images/iphone.png";
import "./SwiperMobile.css";

import s1 from "../../../assets/images/s1.png";
import s2 from "../../../assets/images/s2.png";
import s3 from "../../../assets/images/s3.png";
import s4 from "../../../assets/images/s4.png";
import s5 from "../../../assets/images/s5.png";
import s6 from "../../../assets/images/s6.png";
import s7 from "../../../assets/images/s7.png";
import oval4 from "../../../assets/images/Oval4.png";
import bgmob from "../../../assets/images/bgmob.png";

import { useLottie } from "lottie-react";
import scrollHand from "../../../assets/handScroll.json";

const SwiperMobile = () => {
  const options = {
    animationData: scrollHand,
    loop: true,
  };
  const { View } = useLottie(options);

  const [clicked, setClicked] = useState(false);
  return (
    <div className="swiperContainer">
      <div className="oval4">
        <img src={oval4} alt="oval4" />
      </div>
      <div className="MainHeadDownload">
        <h2>صور من التطبيق</h2>
        <span>اهم صور التطبيق</span>
      </div>
      <div className="bgmob">
        <img src={bgmob} alt="bgmob" />
      </div>
      <div className="swiperMobile" onClick={() => setClicked(true)}>
        {!clicked ? <div className="handScroll">{View}</div> : ""}
        <img src={iphone} alt="iPhone Frame" className="iphone-frame" />
        <div className="iphone-content">
          <Swiper className="mySwiper">
            <SwiperSlide>
              <img src={s1} alt="slide1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s2} alt="slide2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s3} alt="slide3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s4} alt="slide4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s5} alt="slide5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s6} alt="slide6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s7} alt="slide7" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperMobile;
