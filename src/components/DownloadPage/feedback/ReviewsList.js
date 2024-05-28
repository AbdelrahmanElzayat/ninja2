import React from "react";
import FeedbackCard from "./FeedbackCard";
import oval3 from "../../../assets/images/oval3.png";
const ReviewsList = () => {
  return (
    <div className="FeedbackList">
      <FeedbackCard
        name="مصطفي الباجوري"
        description="ممتاز تجربة رائعة، خدمة سريعة وفعالة، وتواصل ممتاز مع العملاء"
      />
      <FeedbackCard
        name="عبدالرحمن الزيات"
        description="ممتاز تجربة رائعة، خدمة سريعة وفعالة، وتواصل ممتاز مع العملاء"
      />
      <FeedbackCard
        name="مصطفي الحسيني"
        description="ممتاز تجربة رائعة، خدمة سريعة وفعالة، وتواصل ممتاز مع العملاء"
      />
      <FeedbackCard
        name="أحمد خطاب"
        description="ممتاز تجربة رائعة، خدمة سريعة وفعالة، وتواصل ممتاز مع العملاء"
      />
      <div className="oval3">
        <img src={oval3} alt="oval3" />
      </div>
    </div>
  );
};

export default ReviewsList;
