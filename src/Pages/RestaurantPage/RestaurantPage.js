import React from "react";
import { useParams } from "react-router-dom";

import placeImg1 from "../../images/place-img-1.jpg";
import placeImg2 from "../../images/place-img-2.jpg";
import placeImg3 from "../../images/place-img-3.jpg";

import "./RestaurantPage.css";

const PLACES_LIST = [
  {
    id: "placeImg3",
    img: placeImg3,
    title: "Tatte Bakery & Cafe",
    location: "1200 New Hampshire Ave NW, Washington, DC",
    category: "Cafe",
    price: "$$",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate.",
  },
  {
    id: "placeImg2",
    img: placeImg2,
    title: "The Executive Diner",
    location: "1400 Duke St, Alexandria, VA",
    category: "Diner",
    price: "$",
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate.",
  },
  {
    id: "placeImg1",
    img: placeImg1,
    title: "Misha's",
    location: "917 King St, Alexandria, VA",
    category: "Cafe",
    price: "$$",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate.",
  },
];

function RestaurantPage(props) {
  const placeId = useParams().placeId;
  const identifiedPlace = PLACES_LIST.find((p) => p.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <div className="restaurant-page-container">
      <div className="restaurant-header">
        <img
          className="restaurant-img"
          src={identifiedPlace.img}
          alt={identifiedPlace.id}
        />
        <div className="restaurant-info-wrapper">
          <h2 className="restaurant-name">{identifiedPlace.title}</h2>
          <div className="restaurant-stats">
            <p className="restaurant-description">
              {identifiedPlace.description}
            </p>
            <p className="restaurant-location">{identifiedPlace.location}</p>
            <div className="restaurant-rating">
              <p className="rating">{identifiedPlace.rating}</p>
              <i className="far fa-star star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
