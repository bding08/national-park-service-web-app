import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img9 from "../images/img-9.jpg";
import img2 from "../images/img-2.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Explore these beautiful National Parks!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the beautiful waterfalls"
              label="Adventure"
              path="/activities"
            />
            <CardItem
              src={img2}
              text="Explore the beautiful waterfalls"
              label="Adventure"
              path="/activities"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img2}
              text="Explore the beautiful waterfalls"
              label="Adventure"
              path="/activities"
            />
            <CardItem
              src={img2}
              text="Explore the beautiful waterfalls"
              label="Adventure"
              path="/activities"
            />
            <CardItem
              src={img2}
              text="Explore the beautiful waterfalls"
              label="Adventure"
              path="/activities"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
