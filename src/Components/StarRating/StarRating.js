import React from "react";
import ReactStars from "react-rating-stars-component";

import "./StarRating.css";

function StarRating(props) {
  function ratingHandler(value) {
    props.ratingHandler(value);
  }
  const secondExample = {
    size: 50,
    count: 5,
    color: "#ccc",
    activeColor: "var(--rating-start-color)",
    value: props.value,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      ratingHandler(newValue);
    },
  };
  return (
    <div className="rate">
      <ReactStars {...secondExample} />
    </div>

    // <div className="rate">
    //   <input
    //     onChange={ratingHandler}
    //     type="radio"
    //     id="star5"
    //     name="rate"
    //     value="5"
    //   />
    //   <label htmlFor="star5" title="text">
    //     5 stars
    //   </label>
    //   <input
    //     onChange={ratingHandler}
    //     type="radio"
    //     id="star4"
    //     name="rate"
    //     value="4"
    //   />
    //   <label htmlFor="star4" title="text">
    //     4 stars
    //   </label>
    //   <input
    //     onChange={ratingHandler}
    //     type="radio"
    //     id="star3"
    //     name="rate"
    //     value="3"
    //   />
    //   <label htmlFor="star3" title="text">
    //     3 stars
    //   </label>
    //   <input
    //     onChange={ratingHandler}
    //     type="radio"
    //     id="star2"
    //     name="rate"
    //     value="2"
    //   />
    //   <label htmlFor="star2" title="text">
    //     2 stars
    //   </label>
    //   <input
    //     onChange={ratingHandler}
    //     type="radio"
    //     id="star1"
    //     name="rate"
    //     value="1"
    //   />
    //   <label htmlFor="star1" title="text">
    //     1 star
    //   </label>
    // </div>
  );
}

export default StarRating;
