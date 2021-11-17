import React from "react";
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import PlacesContainer from "../../Components/PlacesContainer/PlacesContainer";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";

import profilePic from "../../images/profile-pic-1.jpg";

import "./RestaurantPage.css";

function RestaurantPage(props) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default RestaurantPage;
