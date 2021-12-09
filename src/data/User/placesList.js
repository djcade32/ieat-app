import placeImg1 from "../../images/place-img-1.jpg";
import placeImg2 from "../../images/place-img-2.jpg";
import placeImg3 from "../../images/place-img-3.jpg";
import placeImg4 from "../../images/place-img-4.jpg";
import placeImg5 from "../../images/place-img-5.jpg";

import placeImg3Meal1 from "../../images/meal-3-img-1.jpg";
import placeImg3Meal2 from "../../images/meal-3-img-2.jpg";
import placeImg3Drink1 from "../../images/drink-3-img-1.jpg";
import placeImg3Drink2 from "../../images/drink-3-img-2.png";

import placeImg1Meal1 from "../../images/meal-1-img-1.jpg";
import placeImg2Meal1 from "../../images/meal-2-img-1.jpg";
import placeImg2Meal2 from "../../images/meal-2-img-2.jpg";

import placeImg1Drink1 from "../../images/drink-1-img-1.jpg";

export const PLACES_LIST = [
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
    visited: true,
    meals: [
      {
        id: "placeImg3Meal1",
        img: placeImg3Meal1,
        title: "Strawberry French Toast",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$11.50",
        rating: 5,
      },
      {
        id: "placeImg3Meal2",
        img: placeImg3Meal2,
        title: "Chevy Soup",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$12.99",
        rating: 4,
      },
    ],
    drinks: [
      {
        id: "placeImg3Drink1",
        img: placeImg3Drink1,
        title: "Iced Caramel Latte",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$5.00",
        rating: 3,
      },
      {
        id: "placeImg3Drink2",
        img: placeImg3Drink2,
        title: "Hot Chocolate",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$3.99",
        rating: 4,
      },
    ],
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
    visited: true,
    meals: [
      {
        id: "placeImg2Meal1",
        img: placeImg2Meal1,
        title: "Cheescake",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$7.50",
        rating: 4,
      },
      {
        id: "placeImg2Meal2",
        img: placeImg2Meal2,
        title: "Fried Shrimp Tacos",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$11.99",
        rating: 4,
      },
    ],
    drinks: [],
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate.",
    visited: true,
    meals: [
      {
        id: "placeImg1Meal1",
        img: placeImg1Meal1,
        title: "Rasberry Pastry",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$3.50",
        rating: 5,
      },
    ],
    drinks: [
      {
        id: "placeImg1Drink1",
        img: placeImg1Drink1,
        title: "Caramel Machiato",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, earum.",
        price: "$4.00",
        rating: 3,
      },
    ],
  },
  {
    id: "placeImg4",
    img: placeImg4,
    title: "Royal Restaurant & Caterers",
    location: "730 N St Asaph St, Alexandria, VA",
    category: "Italian",
    price: "$$",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate.",
    visited: false,
    meals: [],
    drinks: [],
  },
  {
    id: "placeImg5",
    img: placeImg5,
    title: "Smokecraft Modern Barbecue",
    location: "1051 N Highland St, Arlington, VA",
    category: "BBQ",
    price: "$$",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores sint dolores possimus libero cupiditate.",
    visited: false,
    meals: [],
    drinks: [],
  },
];
