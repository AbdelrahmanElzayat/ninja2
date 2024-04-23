import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LocationCard from "./LocationCard";
import "./LocationCard.css";
const LocationCardList = (props) => {
  return (
    <Container>
      <Row>
        {props?.cards?.map((item, index) => (
          <Col lg="12" className="my-2">
            <LocationCard item={item} key={index}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LocationCardList;
