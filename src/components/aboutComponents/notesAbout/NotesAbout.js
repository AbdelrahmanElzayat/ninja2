import React from "react";
import "./NotesAbout.css";
import NotesCard from "./NotesCard";
import { Container } from "react-bootstrap";
import abouti from "../../../assets/images/abouti.png";
import seei from "../../../assets/images/seei.png";
import msgi from "../../../assets/images/msgi.png";
const NotesAbout = () => {
  return (
    <div className="notesAbout">
      <Container>
        <NotesCard
          title="رؤيتنا"
          description="نينجا هوم ريادتها في مجال صيانة الأجهزة المنزلية، تُلهم ثقة وتُضفي راحة دائمة لعملائها. "
        >
          <div className="iconNotes">
            <img src={seei} alt="seei" />
          </div>
        </NotesCard>
        <NotesCard
          title="رسالتنا"
          description=" نُقدم خدمات صيانة متميزة بأسعار مناسبة، ونُساهم في راحة عملائنا وازدهار بيوتهم."
        >
          <div className="iconNotes">
            <img src={msgi} alt="msgi" />
          </div>
        </NotesCard>
        <NotesCard
          title="من نحن"
          description="نتمتع بخبرة واسعة في مجال صيانة الأجهزة المنزلية لأكثر من 11 عامًا."
        >
          <div className="iconNotes">
            <img src={abouti} alt="abouti" />
          </div>
        </NotesCard>
      </Container>
    </div>
  );
};

export default NotesAbout;
