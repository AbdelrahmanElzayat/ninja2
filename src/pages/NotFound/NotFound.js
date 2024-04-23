import React from "react";
import MainLayouts from "../../Layouts/MainLayouts";
import { Container } from "react-bootstrap";
import notFound from "../../assets/images/notFound.png";
import "./NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <MainLayouts>
      <div className="NotFound py-4">
        <Container>
          <img src={notFound} alt="notFound" />
          <h1>الصفحة غير موجودة</h1>
          <Link to={"/"}>العودة للصفحة الرئيسية</Link>
        </Container>
      </div>
    </MainLayouts>
  );
};

export default NotFound;
