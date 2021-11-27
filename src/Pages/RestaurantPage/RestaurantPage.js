import React from "react";
import { useParams } from "react-router-dom";

import PlacesContainer from "../../Components/PlacesContainer/PlacesContainer";

import placeImg1 from "../../images/place-img-1.jpg";
import placeImg2 from "../../images/place-img-2.jpg";
import placeImg3 from "../../images/place-img-3.jpg";

import placeImg3Meal1 from "../../images/meal-3-img-1.jpg";
import placeImg3Meal2 from "../../images/meal-3-img-2.jpg";
import placeImg3Drink1 from "../../images/drink-3-img-1.jpg";
import placeImg3Drink2 from "../../images/drink-3-img-2.png";

import "./RestaurantPage.css";
import ItemCard from "../../Components/ItemCard/ItemCard";

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
    meals: [
      {
        id: "placeImg3Meal1",
        img: placeImg3Meal1,
        title: "Strawberry French Toast",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$11.50",
        rating: 5,
      },
      {
        id: "placeImg3Meal2",
        img: placeImg3Meal2,
        title: "Chevy Soup",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$12.99",
        rating: 4,
      },
    ],
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
            <p className="restaurant-location">
              <em>{identifiedPlace.location}</em>
            </p>
            <div className="restaurant-rating">
              <p className="rating">{identifiedPlace.rating}</p>
              <i className="far fa-star star"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurant-description-container">
        <p className="restaurant-description">{identifiedPlace.description}</p>
      </div>
      <div className="restaurant-page-buttons">
        <button className="restaurant-page-button">Meals</button>
        <button className="restaurant-page-button">Drinks</button>
      </div>
      <hr className="restaurant-page-hr" />
      <PlacesContainer>
        {identifiedPlace.meals.map((meal) => {
          return (
            <ItemCard
              key={meal.id}
              id={meal.id}
              title={meal.title}
              img={meal.img}
              description={meal.description}
              price={meal.price}
              rating={meal.rating}
            />
          );
        })}
      </PlacesContainer>
    </div>
  );
}

export default RestaurantPage;
