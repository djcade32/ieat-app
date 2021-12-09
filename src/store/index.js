import { configureStore } from "@reduxjs/toolkit";
import PlacesReducer from "./places";

const store = configureStore({
  reducer: { places: PlacesReducer },
});

export default store;
