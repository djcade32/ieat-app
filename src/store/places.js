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
