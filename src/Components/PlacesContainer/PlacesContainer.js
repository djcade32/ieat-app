import React from "react";
import "./PlacesContainer.css";

function PlacesContainer(props) {
  return <div className="visited-places-container">{props.children}</div>;
}

export default PlacesContainer;
