import React, { useEffect, useState } from "react";
import "./Brands.css";
import { Container } from "react-bootstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

const Brands = () => {
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
  const slidesPerView = isMobile ? 3 : 6;
  const imgs = [
    { className: "brand1" },
    { className: "brand2" },
    { className: "brand3" },
    { className: "brand4" },
    { className: "brand5" },
    { className: "brand6" },
  ];
  return (
    <div className="Brands">
      <Container>
        <div className="BrandsContainer">
          {/* {imgs.map((item, index) => (
            <div
              className={`BrandImg_test ${item.className}`}
              key={index}
            ></div>
          ))} */}

          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[Pagination]}
            className="mySwiper"
            centeredSlides={isMobile && true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
          >
            {imgs.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`BrandImg_test ${item.className}`}></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Brands;
