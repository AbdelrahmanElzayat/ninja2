import React from "react";
import "./Review.css";
import ReviewList from "./ReviewCards/ReviewList";

const Review = () => {
  return (
    <div className="Review">
      <div className="mainHead text-center">
        <h2>ماذا قالو عن نينجا هوم</h2>
        <p>نعرض لكم بعض من اراء العملاء بعد استخدامهم تطبيق نينجا هوم</p>
      </div>
      <ReviewList />
    </div>
  );
};

export default Review;
