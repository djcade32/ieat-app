import "./App.css";

import Navbar from "./Components/Navbar/Navbar";

import placeImg1 from "./images/place-img-1.jpg";
import placeImg2 from "./images/place-img-2.jpg";
import placeImg3 from "./images/place-img-3.jpg";

import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";

const PLACES_LIST = [
  {
    id: "place1",
    img: placeImg1,
    title: "Tatte Bakery & Cafe",
    location: "1200 New Hampshire Ave NW, Washington, DC",
    category: "Cafe",
    price: "$$",
    rating: 4.5,
  },
  {
    id: "placeImg2",
    img: placeImg2,
    title: "The Executive Diner",
    location: "1400 Duke St, Alexandria, VA",
    category: "Diner",
    price: "$",
    rating: 3.5,
  },
  {
    id: "placeImg3",
    img: placeImg3,
    title: "Misha's",
    location: "917 King St, Alexandria, VA",
    category: "Cafe",
    price: "$$",
    rating: 4,
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <RestaurantPage userPlaces={PLACES_LIST} />
    </div>
  );
}

export default App;
