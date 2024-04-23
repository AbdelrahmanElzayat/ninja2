import React from "react";
import { Col, Row } from "react-bootstrap";
import './FooterMain.css'
const FooterMain = () => {
  return (
    <div className="footerMain">
      <div className="footerHead text-center">
        <h2>تواصل مع تطبيق نينجا هوم </h2>
        <span>
          اذا كان لديك اي إستفسار او تواجه اي مشكلة فلا تتردد بالتواصل معنا
        </span>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <Row className="w-100">
          <Col lg="6" className="mb-4">
            <input type="text" placeholder="الاسم" />
          </Col>
          <Col lg="6">
            <input type="text" placeholder="رقم الهاتف" />
          </Col>
        </Row>
        <textarea placeholder="اكتب رسالتك هنا"></textarea>
        <button type="submit">ارسال</button>
      </form>
    </div>
  );
};

export default FooterMain;
