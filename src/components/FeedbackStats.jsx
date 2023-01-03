import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

//calculate avg for rating

// we took out { feedback } as an arg i.e. a prop passed from app.js because we're using context NOTE: PropTypes above and below no longer needed
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedback.length;

  //resets average to curent limited to 2 decimal places
  // in regex the no. of O's should equql decimal places being removed if zero
  average = average.toFixed(2).replace(/[..,]00$/, "");

  console.log(average);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? " " : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackStats;
