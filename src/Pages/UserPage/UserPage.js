import React, { useState, useRef } from "react";
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import PlacesContainer from "../../Components/PlacesContainer/PlacesContainer";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import AddModal from "../../Components/AddModal/AddModal";

import profilePic from "../../images/profile-pic-1.jpg";

import "./UserPage.css";

function UserPage(props) {
  const uploadRef = useRef(null);
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

  return (
    <div className="user-page-container">
      <ProfileHeader profilePic={profilePic} />
      <PlacesContainer>
        {props.userPlaces.map((place) => {
          return (
            <RestaurantCard
              key={place.id}
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
        <AddModal>
          <div className="modal-content">
            <h1 className="modal-title">Add Restaurant</h1>
            <div className="input-wrapper">
              <i className="fas fa-search icon"></i>
              <input
                className="input"
                type="text"
                placeholder="Search places"
              />
            </div>

            <div className="input-wrapper">
              <i className="fas fa-utensils icon"></i>
              <input
                className="input"
                type="text"
                placeholder="Restaurant Category"
              />
            </div>

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
          </div>
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
