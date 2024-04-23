import React, { useEffect } from "react";
import MainLayouts from "../../Layouts/MainLayouts";
import Hero from "../../components/HomeComponents/HeroSection/Hero";
import Brands from "../../components/HomeComponents/brandsSection/Brands";
import Advantage from "../../components/HomeComponents/advatageSection/Advantage";
import LastBlogs from "../../components/HomeComponents/blogs/LastBlogs";
import DownApp from "../../components/HomeComponents/download/DownApp";
import Questions from "../../components/HomeComponents/Questions/Questions";
import Review from "../../components/HomeComponents/sayAbout/Review";
import FooterMain from "../../components/layouts/Footer/FooterMain";
import { Helmet } from "react-helmet-async";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayouts>
      <Helmet>
        <title>نينجا هوم لصيانة الأجهزة المنزلية بأعلي جودة وأفضل سعر!</title>
        <meta
          name="description"
          content={"هل تبحث عن حلول مضمونة لصيانة الأجهزة المنزلية؟ نينجا هوم هو الخيار الأمثل، ضمان حتي 30 يوم علي الصيانة، خدمة علي مدار 24 ساعة سريعة مع فنيون محترفون."}
        />
      </Helmet>
      <Hero />
      <Brands />
      <Advantage />
      <LastBlogs />
      <DownApp />
      <Questions />
      <Review />
      <FooterMain />
    </MainLayouts>
  );
};

export default Home;
