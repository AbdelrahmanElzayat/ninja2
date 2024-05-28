import React from "react";
import "./Feedback.css";
import ReviewsList from "./ReviewsList";
import { Container } from "react-bootstrap";
import oval2 from '../../../assets/images/oval2.png'
import oval5 from '../../../assets/images/oval5.png'

const Feedback = () => {
  return (
    <div className="Feedback">
      <div className="oval2">
        <img src={oval2} alt="oval"/>
      </div>
     
      <div className="MainHeadDownload MainHeadFeedback">
        <h2>اراء العملاء</h2>
        <span>اراء العملاء في تطبيق نينجا</span>
      </div>
      <Container>
        <ReviewsList />
      </Container>
      <div className="oval5">
        <img src={oval5} alt="oval5"/>
      </div>
    </div>
  );
};

export default Feedback;
