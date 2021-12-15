import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { placesActions } from "../../store/places";
import { useParams } from "react-router-dom";

import StarRating from "../StarRating/StarRating";
import placeImg from "../../images/place-img-6.jpg";

import AddModal from "../AddModal/AddModal";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { useNavigate } from "react-router-dom";

function EditModal(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const userId = useParams().userId;

  const uploadRef = useRef(null);
  // const placeId = useParams().placeId;
  // const identifiedPlace = placesList.find((p) => p.id === placeId);
  const [placeLocation, setPlaceLocation] = useState(props.place.location);
  const [placeCategory, setPlaceCategory] = useState(props.place.category);
  const [placePrice, setPlacePrice] = useState(props.place.price);
  const [placeRating, setPlaceRating] = useState(props.place.rating);
  const [placeDescription, setPlaceDescription] = useState(
    props.place.description
  );
  const [placeTitle, setPlaceTitle] = useState(props.place.title);
  useEffect(() => {
    if (placeTitle !== props.place.title) {
      geocodeByPlaceId(placeTitle.value.place_id)
        .then((results) => {
          setPlaceLocation(results[0].formatted_address);
        })
        .catch((error) => console.error(error));
    }
  }, [props.place.title, placeTitle, props.place.location]);

  if (!props.place) {
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
    setPlaceRating(value);
  }

  function deleteHandler() {
    dispatch(placesActions.deletePlace(props.place.id));
    const route = "/" + userId;
    navigate(route, { replace: true });
  }

  function handleImageUpload() {
    uploadRef.current.click();
  }

  async function formSubmitHandler(event) {
    props.closeEditModalHandler();
    event.preventDefault();
    const updatedPlace = {
      img: placeImg,
      title:
        placeTitle !== props.place.title
          ? placeTitle.value.structured_formatting.main_text
          : placeTitle,
      location: placeLocation,
      category: placeCategory,
      price: placePrice,
      rating: placeRating,
      description: placeDescription,
    };
    dispatch(
      placesActions.updatePlace({
        placeId: props.place.id,
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
              placeholder: props.place.title,
              value: placeTitle,
              onChange: setPlaceTitle,
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

        <StarRating
          value={props.place.rating}
          ratingHandler={placeRatingHandler}
        />
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
            onClick={deleteHandler}
            className="action-button"
          >
            DELETE
          </button>
          <button
            type="button"
            onClick={props.closeEditModalHandler}
            className="action-button"
          >
            CANCEL
          </button>
          <button type="submit" className="action-button">
            DONE
          </button>
        </div>
      </form>
    </AddModal>
  );
}

export default EditModal;
