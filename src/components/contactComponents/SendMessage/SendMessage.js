import React from "react";
import "./SendMessage.css";
import { Col, Container, Row } from "react-bootstrap";
import contactImage from '../../../assets/images/contactImg.png'
const SendMessage = () => {
  return (
    <div className="SendMessage">
      <Container>
        <h3 className="MainHeadContact">ارسل رساله مباشره</h3>
        <form>
            <Row>
                <Col lg="9">
                    <Row>

                        <Col className="mb-4" lg="6">
                            <input type="text" placeholder="الاسم الاول"/>
                        </Col>
                        <Col className="mb-4" lg="6">
                            <input type="text" placeholder="اسم العائله"/>
                        </Col>
                        <Col className="mb-4" lg='12'>
                            <input type="email" placeholder="البريد الالكتروني"/>
                        </Col>
                        <Col className="mb-4" lg='12'>
                            <input type="number" placeholder="رقم الهاتف"/>
                        </Col>
                        <Col lg="12">
                            <textarea placeholder="موضوع رسالتك"></textarea>
                        </Col>
                        <Col lg="12" className="d-flex justify-content-end">
                            <button type="submit">ارسال</button>
                        </Col>
                    </Row>
                </Col>
                <Col lg="3" className="contactImgCol">
                    <div className="contactImg">
                        <img src={contactImage} alt="contactIcon"/>
                    </div>
                </Col>
            </Row>
        </form>
      </Container>
    </div>
  );
};

export default SendMessage;
