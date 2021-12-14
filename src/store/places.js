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
