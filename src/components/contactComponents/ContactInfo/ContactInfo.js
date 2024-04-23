import React from "react";
import "./ContactInfo.css";
import { Container } from "react-bootstrap";
import ContactCard from "./ContactCard/ContactCard";
import whats from "../../../assets/images/whats.png";
const ContactInfo = () => {
  return (
    <div className="ContactInfo">
      <Container>
        <h3 className="MainHeadContact">تواصل معنا</h3>
        <div className="ContactInfoContent">
          <ContactCard
            title="اتصل بنا"
            description={
              <>
                01002003004 <br />
                يـومـيـــا مــن 10ص : 5م
              </>
            }
          >
            <i className="ri-phone-line"></i>
          </ContactCard>
          <ContactCard
            title="واتساب"
            description={
              <>
                01002003004 <br />
                يـومـيـــا مــن 10ص : 5م
              </>
            }
          >
            <img src={whats} alt="whats" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 8H16M8 12H13M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
          </ContactCard>
          <ContactCard
            title="البريد الالكتروني"
            description={
              <>
                info@ninjahome.net <br />
                متاح علي مدار 24 ساعة
              </>
            }
          >
            <i className="ri-mail-line"></i>
          </ContactCard>
        </div>
      </Container>
    </div>
  );
};

export default ContactInfo;
