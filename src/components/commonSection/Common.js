import React from "react";
import "./Common.css";
import { Container } from "react-bootstrap";
const Common = (props) => {
  return (
    <div className="Common">
      <Container>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Container>
    </div>
  );
};

export default Common;
