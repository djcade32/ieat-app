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

function UserPage(props) {
  const uploadRef = useRef(null);
  const userId = useParams().userId;
  const [showVisitedList, setShowVisitedList] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
          <div className="input-wrapper">
            <i className="fas fa-search icon"></i>
            <input className="input" type="text" placeholder="Search places" />
          </div>

          <div className="input-wrapper">
            <i className="fas fa-utensils icon"></i>
            <input
              className="input"
              type="text"
              placeholder="Restaurant Category"
            />
          </div>

          <select className="restaurant-page-input" name="price" id="price">
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>

          <textarea
            className="modal-textarea"
            name="restaurant-description"
            id="restaurant-description"
            cols="30"
            rows="10"
            placeholder="Description..."
          ></textarea>
          <StarRating />
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

export default UserPage;
