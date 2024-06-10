import React from "react";
import "./LocationBox.css";
import SearchBar from "./SearchBar";
import { Container } from "react-bootstrap";
import CardsList from "./CardsList";
const LocationBox = () => {
  return (
    <div className="LocationBox">
      <Container>
        <div className="LocationBox_container">
          <SearchBar />
          <CardsList />
        </div>
      </Container>
    </div>
  );
};

export default LocationBox;
