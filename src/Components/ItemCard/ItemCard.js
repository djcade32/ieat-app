import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ItemCard.css";

function ItemCard(props) {
  const placeId = useParams().placeId;
  const placesList = useSelector((state) => state.places.placesList);

  let identifiedItem = placesList
    .find((p) => p.id === placeId)
    .meals.find((m) => m.id === props.id);

  if (!identifiedItem) {
    identifiedItem = placesList
      .find((p) => p.id === placeId)
      .drinks.find((m) => m.id === props.id);
  }

  function editClickHandler() {
    console.log("show edit");
    console.log(identifiedItem);
    props.editHandler(identifiedItem);
  }
  return (
    <li className="place-item-container">
      <img className="place-item-image" src={props.img} alt="meal" />
      <div className="place-item-info-wrapper">
        <div className="place-item-info-wrapper-top">
          <h2 className="place-item-name">{props.title}</h2>
          <i
            onClick={editClickHandler}
            className="fas fa-pen place-item-edit-icon"
          ></i>
        </div>

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
