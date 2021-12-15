import React from "react";
import "./RestaurantCardVisited.css";
import { Link } from "react-router-dom";

function RestaurantCard(props) {
  return (
    <li className="place-container">
      <Link to={`/${props.userId}/${props.id}/restaurant`}>
        <img className="place-image" src={props.img} alt={props.title} />
        <div className="place-info-wrapper">
          <h2 className="place-name">{props.title}</h2>
          <div className="place-location-wrapper">
            <i className="fas fa-map-marker-alt location-marker"></i>
            <p className="place-location">
              <em>{props.location}</em>
            </p>
          </div>
          <div className="stat-wrapper">
            <p className="place-category">{props.category}</p>
            <p className="place-price">{props.price}</p>
            <div className="place-rating">
              <p className="rating-number">{props.rating}</p>
              <i className="far fa-star star"></i>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default RestaurantCard;
