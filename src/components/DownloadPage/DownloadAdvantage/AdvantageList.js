import React from "react";
import { Container } from "react-bootstrap";
import AdvantageCard from "./AdvantageCard";
import adv1 from "../../../assets/images/adv1.png";
import adv2 from "../../../assets/images/adv2.png";
import adv3 from "../../../assets/images/adv3.png";
import adv4 from "../../../assets/images/adv4.png";
import adv5 from "../../../assets/images/adv5.png";

const AdvantageList = () => {
  return (
    <div className="cardList">
      <Container>
        <AdvantageCard
          image={adv1}
          title="اكثر من 8 خدمات"
          description="لدينا الكثير من الخدمات لمساعدتك
في صيانه اجهزتك المنزليه"
        />
        <AdvantageCard
          image={adv2}
          title="فنين متميزين"
          description="لدينا فنين متميزين في كل المجالات لمساعدتك"
        />
        <AdvantageCard
          image={adv3}
          title="خدمه 24 ساعه"
          description="خدمه دعم فني علي مدار ال24 ساعه"
        />
        <AdvantageCard
          image={adv4}
          title="تصميم سهل "
          description="تصميم بسيط و سهل لسهوله الاستخدام"
        />
        <AdvantageCard
          image={adv5}
          title="الجودة والكفاءة"
          description="توفير خدمات صيانة عالية الجودة وبكفاءة عالية ."
        />
      </Container>
    </div>
  );
};

export default AdvantageList;
