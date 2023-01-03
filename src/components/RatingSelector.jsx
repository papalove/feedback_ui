import React from "react";
// we import use state to enable component level state to know which button was selected
import { useState, useContext, useEffect } from "react";
// import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelector({ select }) {
  const [selected, setSelected] = useState(5);

  const { feedbackEditContainer } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEditContainer.item.rating);
  }, [feedbackEditContainer]);

  const handleChange = (event) => {
    //event.currentTarget.value passes in selected
    //by default event.currentTarget.value is string so we add + to change to num
    // we can check that by:
    //console.log(typeof +event.currentTarget.value);
    console.log(+event.currentTarget.value);
    setSelected(+event.currentTarget.value); //updates form UI when selected
    select(+event.currentTarget.value); //updates card value after submit
  };

  return (
    <ul className="rating">
      <li>
        {/* <li> styles coming from index.css .rating li */}
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        {/* note how htmlFor= matches "num1" id */}
        <label htmlFor="num1">1</label>
      </li>

      <li>
        <input
          type="radio"
          id="num2"
          name="rating"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>

      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>

      <li>
        <input
          type="radio"
          id="num4"
          name="rating"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>

      <li>
        <input
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
    </ul>
  );
}
export default RatingSelector;
