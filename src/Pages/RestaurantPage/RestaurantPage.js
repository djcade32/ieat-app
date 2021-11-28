import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import PlacesContainer from "../../Components/PlacesContainer/PlacesContainer";
import AddModal from "../../Components/AddModal/AddModal";

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
    drinks: [
      {
        id: "placeImg3Drink1",
        img: placeImg3Drink1,
        title: "Iced Caramel Latte",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$5.00",
        rating: 3,
      },
      {
        id: "placeImg3Drink2",
        img: placeImg3Drink2,
        title: "Hot Chocolate",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$3.99",
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
  const [showModal, setShowModal] = useState(false);
  const [showMealList, setShowMealList] = useState(true);

  const uploadRef = useRef(null);

  const placeId = useParams().placeId;

  const identifiedPlace = PLACES_LIST.find((p) => p.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  function handleAddButtonClick() {
    setShowModal(true);
  }

  function handleActionButtonClick() {
    setShowModal(false);
  }

  function handleImageUpload() {
    uploadRef.current.click();
  }

  function handleFoodTypeClick(event) {
    if (event.target.id === "meals") {
      setShowMealList(true);
    } else {
      setShowMealList(false);
    }
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
        <button
          id="meals"
          onClick={handleFoodTypeClick}
          className={
            showMealList
              ? "restaurant-page-button active-page-button"
              : "restaurant-page-button"
          }
        >
          Meals
        </button>
        <button
          id="drinks"
          onClick={handleFoodTypeClick}
          className={
            showMealList
              ? "restaurant-page-button"
              : "restaurant-page-button active-page-button"
          }
        >
          Drinks
        </button>
      </div>
      <hr className="restaurant-page-hr" />
      <PlacesContainer>
        {showMealList
          ? identifiedPlace.meals.map((meal) => {
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
            })
          : identifiedPlace.drinks.map((drink) => {
              return (
                <ItemCard
                  key={drink.id}
                  id={drink.id}
                  title={drink.title}
                  img={drink.img}
                  description={drink.description}
                  price={drink.price}
                  rating={drink.rating}
                />
              );
            })}
      </PlacesContainer>
      <div className="add-control-container">
        <i
          onClick={handleAddButtonClick}
          className="fas fa-2x fa-plus-circle add-button"
        ></i>
      </div>
      {showModal && (
        <AddModal>
          <select
            className="restaurant-page-input"
            name="foodType"
            id="foodType"
          >
            <option value="meal">Meal</option>
            <option value="drink">Drink</option>
          </select>
          <input
            className="restaurant-page-input"
            type="text"
            placeholder="Name"
          />
          <textarea
            className="modal-textarea"
            name="restaurant-description"
            id="restaurant-description"
            cols="30"
            rows="10"
            placeholder="Description..."
          ></textarea>
          <div className="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label htmlFor="star5" title="text">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label htmlFor="star4" title="text">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label htmlFor="star3" title="text">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label htmlFor="star2" title="text">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label htmlFor="star1" title="text">
              1 star
            </label>
          </div>
          <button className="modal-upload-button" onClick={handleImageUpload}>
            <i className="fas fa-upload upload-icon"></i> Choose Image
            <input
              className="hidden-file-upload-button"
              type="file"
              ref={uploadRef}
            />
          </button>
          <div className="buttons-container">
            <button onClick={handleActionButtonClick} className="action-button">
              CANCEL
            </button>
            <button onClick={handleActionButtonClick} className="action-button">
              ADD
            </button>
          </div>
        </AddModal>
      )}
    </div>
  );
}

export default RestaurantPage;
