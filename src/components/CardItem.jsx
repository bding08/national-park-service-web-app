import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  return (
    <>
      <li
        className="cards__item"
        onClick={(e) => {
          e.preventDefault();
          const url =
            "https://www.nps.gov/common/uploads/cropped_image/4694C878-9683-31A4-D7A86059852B7750.jpg";
          window.open(url, "_blank");
        }}
      >
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Travel Image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
