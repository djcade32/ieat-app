import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import UserPage from "./Pages/UserPage/UserPage";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";
import { PLACES_VISITED_LIST } from "./data/User/placesVisitedList";
import { PLACES_NOT_VISITED_LIST } from "./data/User/placesNotVisitedList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/*"
            element={
              <UserPage
                userPlacesVisited={PLACES_VISITED_LIST}
                userPlacesNotVisited={PLACES_NOT_VISITED_LIST}
              />
            }
          />
          <Route path="/:placeId/restaurant/*" element={<RestaurantPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
