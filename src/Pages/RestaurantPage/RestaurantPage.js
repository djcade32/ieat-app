import React from "react";
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import PlacesContainer from "../../Components/PlacesContainer/PlacesContainer";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import AddModal from "../../Components/AddModal/AddModal";

import profilePic from "../../images/profile-pic-1.jpg";

import "./RestaurantPage.css";

function RestaurantPage(props) {
  return (
    <div className="restaurant-page-container">
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
        <i className="fas fa-2x fa-plus-circle add-button"></i>
      </div>
      <AddModal>
        <div className="modal-content">
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

          <textarea
            className="modal-textarea"
            name="restaurant-description"
            id="restaurant-description"
            cols="30"
            rows="10"
            placeholder="Description..."
          ></textarea>
          <button className="modal-upload-button">
            <i className="fas fa-upload"></i> Choose Image
          </button>
        </div>
        <div className="buttons-container">
          <button className="action-button">CANCEL</button>
          <button className="action-button">DONE</button>
        </div>
      </AddModal>
    </div>
  );
}

export default RestaurantPage;
