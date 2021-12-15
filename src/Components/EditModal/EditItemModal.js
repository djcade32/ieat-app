import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { placesActions } from "../../store/places";
import { useParams } from "react-router-dom";

import StarRating from "../StarRating/StarRating";
import mealImg from "../../images/meal-6-img-1.jpg";

import AddModal from "../AddModal/AddModal";

function EditModal(props) {
  const dispatch = useDispatch();
  const placeId = useParams().placeId;

  const [itemTitle, setItemTitle] = useState(props.item.title);
  const [itemPrice, setItemPrice] = useState(props.item.price);
  const [itemRating, setItemRating] = useState(props.item.rating);
  const [itemDescription, setItemDescription] = useState(
    props.item.description
  );
  const [foodType, setFoodType] = useState(props.item.foodType);

  const uploadRef = useRef(null);

  function itemFoodTypeHandler(event) {
    setFoodType(event.target.value);
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
    setItemRating(value);
  }

  function handleImageUpload() {
    uploadRef.current.click();
  }

  function handleCancelButtonClick() {
    props.closeEditModalHandler();
  }

  function deleteHandler() {
    dispatch(
      placesActions.deleteItem({
        placeId: placeId,
        itemId: props.item.id,
        itemFoodType: props.item.foodType,
      })
    );
    props.closeEditModalHandler();
  }

  async function formSubmitHandler(event) {
    props.closeEditModalHandler();
    event.preventDefault();
    const updatedItem = {
      id: props.item.id,
      img: mealImg,
      title: itemTitle,
      description: itemDescription,
      price: itemPrice,
      rating: itemRating,
      foodType: foodType,
    };
    if (foodType !== props.item.foodType) {
      updatedItem.id = "item" + Math.floor(Math.random() * 100);
      dispatch(
        placesActions.deleteItem({
          placeId: placeId,
          itemId: props.item.id,
          itemFoodType: props.item.foodType,
        })
      );
      if (foodType === "meal") {
        dispatch(
          placesActions.addMeal({ placeId: placeId, item: updatedItem })
        );
      } else {
        dispatch(
          placesActions.addDrink({ placeId: placeId, item: updatedItem })
        );
      }
    } else {
      dispatch(
        placesActions.updateItem({
          placeId: placeId,
          itemId: props.item.id,
          itemFoodType: foodType,
          updatedItem: updatedItem,
        })
      );
    }

    console.log("Updated item.");
    console.log(updatedItem);
  }

  return (
    <AddModal>
      <h1 className="restaurant-modal-title">Add Meal or Drink</h1>
      <form onSubmit={formSubmitHandler} className="add-modal-form">
        <select
          onChange={itemFoodTypeHandler}
          className="restaurant-page-input"
          name="foodType"
          id="foodType"
          value={foodType}
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
        <StarRating value={itemRating} ratingHandler={itemRatingHandler} />
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
            onClick={handleCancelButtonClick}
            className="action-button"
          >
            CANCEL
          </button>
          <button type="submit" className="action-button">
            EDIT
          </button>
        </div>
      </form>
    </AddModal>
  );
}

export default EditModal;
