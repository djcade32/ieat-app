import React from "react";
import "./ItemCard.css";

function ItemCard(props) {
  return (
    <li className="place-item-container">
      <img className="place-item-image" src={props.img} alt="meal" />
      <div className="place-item-info-wrapper">
        <h2 className="place-item-name">{props.title}</h2>
        <div className="place-item-description-wrapper">
          <p className="place-item-description">
            <em>{props.description}</em>
          </p>
        </div>
        <div className="place-item-stat-wrapper">
          <p className="place-item-price">{props.price}</p>
          <div className="place-rating">
            <p className="rating-number">{props.rating}</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
