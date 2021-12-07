import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import PlacesContainer from "../../Components/PlacesContainer/PlacesContainer";
import RestaurantCardVisited from "../../Components/RestaurantCards/RestaurantCardVisited";
import AddModal from "../../Components/AddModal/AddModal";

import { USERS_LIST } from "../../data/Users/UsersList";

import "./UserPage.css";
import StarRating from "../../Components/StarRating/StarRating";
import RestaurantCardNotVisited from "../../Components/RestaurantCards/RestaurantCardNotVisited";
import placeImg from "../../images/place-img-6.jpg";
import { PLACES_VISITED_LIST } from "../../data/User/placesVisitedList";
import { PLACES_NOT_VISITED_LIST } from "../../data/User/placesNotVisitedList";

function UserPage(props) {
  const uploadRef = useRef(null);
  const userId = useParams().userId;
  const [showVisitedList, setShowVisitedList] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [placeTitle, setPlaceTitle] = useState("");
  // const [placeLocation, setPlaceLocation] = useState("");
  const [placeCategory, setPlaceCategory] = useState("");
  const [placePrice, setPlacePrice] = useState("$");
  const [placeRating, setPlaceRating] = useState("");
  const [placeDescription, setPlaceDescription] = useState("");

  function placeTitleHandler(event) {
    setPlaceTitle(event.target.value);
  }

  // function placeLocationHandler(event) {
  //   setPlaceLocation(event.target.value)
  // }

  function placeCategoryHandler(event) {
    setPlaceCategory(event.target.value);
  }

  function placePriceHandler(event) {
    setPlacePrice(event.target.value);
  }

  function placeDescriptionHandler(event) {
    setPlaceDescription(event.target.value);
  }

  function placeRatingHandler(value) {
    console.log("user page: " + value);
    setPlaceRating(value);
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

  function handleListButtonClick(event) {
    if (event.target.id === "visited" || event.target.id === "visited-stat") {
      setShowVisitedList(true);
    } else {
      setShowVisitedList(false);
    }
  }

  const identifiedUser = USERS_LIST.find((u) => u.id === userId);
  if (!identifiedUser) {
    return (
      <div className="center">
        <h2 style={{ textAlign: "center" }}>Could not find user!</h2>
      </div>
    );
  }

  function formSubmitHandler() {
    handleActionButtonClick();
    const newPlace = {
      id: "place" + Math.floor(Math.random() * 100),
      img: placeImg,
      title: placeTitle,
      location: "1114 6th Ave, New York, NY",
      category: placeCategory,
      price: placePrice,
      rating: placeRating,
      description: placeDescription,
      meals: [],
      drinks: [],
    };
    if (showVisitedList) {
      PLACES_VISITED_LIST.push(newPlace);
    } else {
      PLACES_NOT_VISITED_LIST.push(newPlace);
    }

    console.log("New place created.");
  }

  return (
    <div className="user-page-container">
      <ProfileHeader
        name={identifiedUser.name}
        profilePic={identifiedUser.profilePic}
        location={identifiedUser.location}
      />
      <div className="user-stats">
        <button
          id="visited"
          onClick={handleListButtonClick}
          className={
            showVisitedList ? "stat-button active-page-button" : "stat-button"
          }
        >
          <p id="visited-stat" className="stat-number">
            {props.userPlacesVisited.length}
          </p>
          <p id="visited-stat" className="stat-title">
            Visited
          </p>
        </button>
        <button
          id="notVisited"
          onClick={handleListButtonClick}
          className={
            showVisitedList ? "stat-button" : "stat-button active-page-button"
          }
        >
          <p className="stat-number">{props.userPlacesNotVisited.length}</p>
          <p className="stat-title">Not Visited</p>
        </button>
      </div>
      <hr className="header-hr" />
      <PlacesContainer>
        {showVisitedList
          ? props.userPlacesVisited.map((place) => {
              return (
                <RestaurantCardVisited
                  key={place.id}
                  id={place.id}
                  title={place.title}
                  img={place.img}
                  location={place.location}
                  category={place.category}
                  price={place.price}
                  rating={place.rating}
                />
              );
            })
          : props.userPlacesNotVisited.map((place) => {
              return (
                <RestaurantCardNotVisited
                  key={place.id}
                  id={place.id}
                  title={place.title}
                  img={place.img}
                  location={place.location}
                  category={place.category}
                  price={place.price}
                  rating={place.rating}
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
        <AddModal class="add-modal-height">
          <h1 className="modal-title">Add Restaurant</h1>
          <form onSubmit={formSubmitHandler} className="add-modal-form">
            <div className="input-wrapper">
              <i className="fas fa-search icon"></i>
              <input
                onChange={placeTitleHandler}
                className="input"
                type="text"
                placeholder="Search places"
                value={placeTitle}
              />
            </div>

            <div className="input-wrapper">
              <i className="fas fa-utensils icon"></i>
              <input
                onChange={placeCategoryHandler}
                className="input"
                type="text"
                placeholder="Restaurant Category"
                value={placeCategory}
              />
            </div>

            <select
              onChange={placePriceHandler}
              className="restaurant-page-input"
              name="price"
              id="price"
              value={placePrice}
            >
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
            </select>
            <textarea
              onChange={placeDescriptionHandler}
              className="modal-textarea"
              name="restaurant-description"
              id="restaurant-description"
              cols="30"
              rows="10"
              placeholder="Description..."
              value={placeDescription}
            ></textarea>

            {showVisitedList && (
              <StarRating placeRatingHandler={placeRatingHandler} />
            )}
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
    </div>
  );
}

export default UserPage;
