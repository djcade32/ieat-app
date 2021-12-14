import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placesActions } from "../../store/places";
import { useParams } from "react-router-dom";

import StarRating from "../../Components/StarRating/StarRating";
import placeImg from "../../images/place-img-6.jpg";

import "./EditModal.css";
import AddModal from "../AddModal/AddModal";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";

function EditModal() {
  const dispatch = useDispatch();

  const placesList = useSelector((state) => state.places.placesList);

  const uploadRef = useRef(null);
  const placeId = useParams().placeId;
  const identifiedPlace = placesList.find((p) => p.id === placeId);
  const [showVisitedList, setShowVisitedList] = useState(true);
  const [placeLocation, setPlaceLocation] = useState("");
  const [placeCategory, setPlaceCategory] = useState(identifiedPlace.category);
  const [placePrice, setPlacePrice] = useState(identifiedPlace.price);
  const [placeRating, setPlaceRating] = useState(identifiedPlace.rating);
  const [placeDescription, setPlaceDescription] = useState(
    identifiedPlace.description
  );
  const [value, setValue] = useState(identifiedPlace.title);
  const [edited, isEdited] = useState(false);
  useEffect(() => {
    if (edited) {
      geocodeByPlaceId(value.value.place_id)
        .then((results) => {
          setPlaceLocation(results[0].formatted_address);
        })
        .catch((error) => console.error(error));
    }
  }, [edited]);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2 style={{ textAlign: "center" }}>Could not find place!</h2>
      </div>
    );
  }

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

  function handleDoneButtonClick() {
    isEdited(true);
  }

  function handleActionButtonClick() {}

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

  async function formSubmitHandler(event) {
    event.preventDefault();
    handleDoneButtonClick();
    console.log(value);
    const updatedPlace = {
      img: placeImg,
      title:
        value.value.place_id !== null
          ? value.value.structured_formatting.main_text
          : value,
      location: placeLocation,
      category: placeCategory,
      price: placePrice,
      rating: placeRating,
      description: placeDescription,
    };
    dispatch(
      placesActions.updatePlace({
        placeId: placeId,
        updatedPlace: updatedPlace,
      })
    );
    console.log("Updated place.");
    console.log(updatedPlace);
  }

  return (
    <AddModal class="add-modal-height">
      <h1 className="modal-title">Edit Restaurant</h1>
      <form onSubmit={formSubmitHandler} className="add-modal-form">
        <div className="input-wrapper">
          <i className="fas fa-utensils icon"></i>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyA8La_OuuXHnsK2OE9QBqvaVSjWlmDlMr0"
            autocompletionRequest={{ types: ["establishment"] }}
            selectProps={{
              openMenuOnClick: false,
              isClearable: true,
              backspaceRemovesValue: true,
              // menuIsOpen: true,
              styles: {
                dropdownIndicator: () => ({
                  display: "none",
                }),
                indicatorSeparator: () => ({
                  display: "none",
                }),
                container: () => ({
                  width: "65%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  position: "relative",
                }),
                control: () => ({
                  backgroundColor: "white",
                  border: " none",
                  borderRadius: " 0.5em",
                  caretColor: " var(--font-color)",
                  fontFamily: " var(--font-family)",
                }),
              },
              placeholder: "Search Places",
              value: { label: value },
              onChange: setValue,
            }}
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
          <StarRating
            value={identifiedPlace.rating}
            ratingHandler={placeRatingHandler}
          />
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
            DELETE
          </button>
          <button
            className={handleDoneButtonClick}
            type="submit"
            className="action-button"
          >
            DONE
          </button>
        </div>
      </form>
    </AddModal>
  );
}

export default EditModal;
