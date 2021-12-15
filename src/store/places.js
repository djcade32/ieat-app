import { createSlice } from "@reduxjs/toolkit";
import { PLACES_LIST } from "../data/User/placesList";

const initialPlacesState = { placesList: [...PLACES_LIST] };

const placesSlice = createSlice({
  name: "places",
  initialState: initialPlacesState,
  reducers: {
    addPlace(state, action) {
      state.placesList.push(action.payload);
    },

    updatePlace(state, action) {
      const foundPlace = state.placesList.find(
        (place) => place.id === action.payload.placeId
      );

      foundPlace.img = action.payload.updatedPlace.img;
      foundPlace.title = action.payload.updatedPlace.title;
      foundPlace.category = action.payload.updatedPlace.category;
      foundPlace.description = action.payload.updatedPlace.description;
      foundPlace.location = action.payload.updatedPlace.location;
      foundPlace.price = action.payload.updatedPlace.price;
      foundPlace.rating = action.payload.updatedPlace.rating;
    },

    deletePlace(state, action) {
      state.placesList = state.placesList.filter(
        (place) => place.id !== action.payload
      );
      console.log("Place Deleted");
    },

    addMeal(state, action) {
      const foundPlace = state.placesList.find(
        (place) => place.id === action.payload.placeId
      );
      foundPlace.meals.push(action.payload.item);
    },

    addDrink(state, action) {
      const foundPlace = state.placesList.find(
        (place) => place.id === action.payload.placeId
      );
      foundPlace.drinks.push(action.payload.item);
    },

    updateItem(state, action) {
      let foundItem;
      if (action.payload.itemFoodType === "meal") {
        foundItem = state.placesList
          .find((p) => p.id === action.payload.placeId)
          .meals.find((m) => m.id === action.payload.itemId);
      } else {
        foundItem = state.placesList
          .find((p) => p.id === action.payload.placeId)
          .drinks.find((d) => d.id === action.payload.itemId);
      }

      foundItem.img = action.payload.updatedItem.img;
      foundItem.title = action.payload.updatedItem.title;
      foundItem.description = action.payload.updatedItem.description;
      foundItem.price = action.payload.updatedItem.price;
      foundItem.rating = action.payload.updatedItem.rating;
      foundItem.foodType = action.payload.updatedItem.foodType;
    },

    deleteItem(state, action) {
      let foundItem = state.placesList.find(
        (p) => p.id === action.payload.placeId
      );
      if (action.payload.itemFoodType === "meal") {
        foundItem.meals = foundItem.meals.filter(
          (m) => m.id !== action.payload.itemId
        );
      } else {
        foundItem.drinks = foundItem.drinks.filter(
          (d) => d.id !== action.payload.itemId
        );
      }
      console.log("Item Deleted");
    },

    changeToVisited(state, action) {
      const newPlaceVisited = state.placesList.find(
        (place) => place.id === action.payload
      );
      newPlaceVisited.visited = true;
    },
  },
});

export const placesActions = placesSlice.actions;
export default placesSlice.reducer;
