import React from "react";
import "./PlacesContainer.css";

function PlacesContainer(props) {
  return <ul className="visited-places-container">{props.children}</ul>;
}

export default PlacesContainer;
