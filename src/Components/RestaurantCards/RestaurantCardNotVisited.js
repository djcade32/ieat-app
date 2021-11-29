import React from "react";
import "./RestaurantCardNotVisited.css";

function RestaurantCardNotVisited(props) {
  return (
    <li className="restaurant-card-not-visited-container">
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
          <button className="restaurant-card-not-visited-button">
            Visited
          </button>
        </div>
      </div>
    </li>
  );
}

export default RestaurantCardNotVisited;
