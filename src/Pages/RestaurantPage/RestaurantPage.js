import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import PlacesContainer from "../../Components/PlacesContainer/PlacesContainer";
import AddModal from "../../Components/AddModal/AddModal";

import "./RestaurantPage.css";
import ItemCard from "../../Components/ItemCard/ItemCard";
import StarRating from "../../Components/StarRating/StarRating";
import { useSelector, useDispatch } from "react-redux";
import itemImg from "../../images/meal-6-img-1.jpg";
import { placesActions } from "../../store/places";
import EditModal from "../../Components/EditModal/EditModal";

function RestaurantPage(props) {
  const dispatch = useDispatch();

  const placesList = useSelector((state) => state.places.placesList);

  const [showModal, setShowModal] = useState(false);
  const [showMealList, setShowMealList] = useState(true);

  const [itemTitle, setItemTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemRating, setItemRating] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [foodType, setFoodType] = useState("meal");
  const [showEditModal, setShowEditModal] = useState(false);

  const uploadRef = useRef(null);

  const placeId = useParams().placeId;

  const identifiedPlace = placesList.find((p) => p.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2 style={{ textAlign: "center" }}>Could not find place!</h2>
      </div>
    );
  }

  function itemTitleHandler(event) {
    setItemTitle(event.target.value);
  }

  function itemPriceHandler(event) {
    setItemPrice(event.target.value);
  }

  function itemDescriptionHandler(event) {
    setItemDescription(event.target.value);
  }

  function itemRatingHandler(value) {
    console.log("user page: " + value);
    setItemRating(value);
  }

  function itemFoodTypeHandler(event) {
    console.log(event.target.value);
    setFoodType(event.target.value);
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

  function formSubmitHandler(event) {
    event.preventDefault();
    handleActionButtonClick();
    const newItem = {
      id: "item" + Math.floor(Math.random() * 100),
      img: itemImg,
      title: itemTitle,
      description: itemDescription,
      price: itemPrice,
      rating: itemRating,
    };
    if (foodType === "meal") {
      dispatch(placesActions.addMeal({ placeId: placeId, item: newItem }));
    } else {
      dispatch(placesActions.addDrink({ placeId: placeId, item: newItem }));
    }

    console.log("New item created.");
    console.log(newItem);
    setItemRating(0);
  }

  function editClickHandler() {
    setShowEditModal(!showEditModal);
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
          <div className="restaurant-info-wrapper-top">
            <h2 className="restaurant-name">{identifiedPlace.title}</h2>
            <i
              onClick={editClickHandler}
              className="fas fa-pen restaurant-page-edit-icon"
            ></i>
          </div>

          <div className="restaurant-info-wrapper-bottom">
            <div className="restaurant-location-wrapper">
              <i className="fas fa-map-marker-alt restaurant-location-marker"></i>
              <p className="restaurant-location">
                <em>{identifiedPlace.location}</em>
              </p>
            </div>
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
                  price={new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(meal.price)}
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
          <h1 className="restaurant-modal-title">Add Meal or Drink</h1>
          <form onSubmit={formSubmitHandler} className="add-modal-form">
            <select
              onChange={itemFoodTypeHandler}
              className="restaurant-page-input"
              name="foodType"
              id="foodType"
            >
              <option value="meal">Meal</option>
              <option value="drink">Drink</option>
            </select>
            <input
              onChange={itemTitleHandler}
              className="restaurant-page-input"
              type="text"
              placeholder="Name"
              value={itemTitle}
            />
            <input
              onChange={itemPriceHandler}
              className="restaurant-page-input"
              type="number"
              placeholder="Price"
              value={itemPrice}
            />
            <textarea
              onChange={itemDescriptionHandler}
              className="modal-textarea"
              name="restaurant-description"
              id="restaurant-description"
              cols="30"
              rows="10"
              placeholder="Description..."
              value={itemDescription}
            ></textarea>
            <StarRating ratingHandler={itemRatingHandler} />
            <button
              type="button"
              className="modal-upload-button"
              onClick={handleImageUpload}
            >
              <i className="fas fa-upload upload-icon"></i> Choose Image
              <input
                className="hidden-file-upload-button"
                type="file"
                ref={uploadRef}
              />
            </button>
            <div className="buttons-container">
              <button
                type="button"
                onClick={handleActionButtonClick}
                className="action-button"
              >
                CANCEL
              </button>
              <button type="submit" className="action-button">
                ADD
              </button>
            </div>
          </form>
        </AddModal>
      )}
      {showEditModal && (
        <EditModal
          place={identifiedPlace}
          closeEditModalHandler={editClickHandler}
        />
      )}
    </div>
  );
}

export default RestaurantPage;
