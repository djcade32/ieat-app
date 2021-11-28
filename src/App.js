import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import placeImg1 from "./images/place-img-1.jpg";
import placeImg2 from "./images/place-img-2.jpg";
import placeImg3 from "./images/place-img-3.jpg";

import UserPage from "./Pages/UserPage/UserPage";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";

const PLACES_LIST = [
  {
    id: "placeImg3",
    img: placeImg3,
    title: "Tatte Bakery & Cafe",
    location: "1200 New Hampshire Ave NW, Washington, DC",
    category: "Cafe",
    price: "$$",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate.",
  },
  {
    id: "placeImg2",
    img: placeImg2,
    title: "The Executive Diner",
    location: "1400 Duke St, Alexandria, VA",
    category: "Diner",
    price: "$",
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate.",
  },
  {
    id: "placeImg1",
    img: placeImg1,
    title: "Misha's",
    location: "917 King St, Alexandria, VA",
    category: "Cafe",
    price: "$$",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate.",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/*" element={<UserPage userPlaces={PLACES_LIST} />} />
          <Route path="/:placeId/restaurant/*" element={<RestaurantPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
