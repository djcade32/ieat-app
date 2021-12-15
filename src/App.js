import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserPage from "./Pages/UserPage/UserPage";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";
import Auth from "./Pages/AuthPages/Auth";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="/:userId/*" element={<UserPage />} />
          <Route
            path="/:userId/:placeId/restaurant/*"
            element={<RestaurantPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
