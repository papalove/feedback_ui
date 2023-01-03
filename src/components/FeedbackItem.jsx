import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

//we took out import useState from above because we no longer set the state in the component level and then went from passing in global/app state as props import { useState } from "react" to now passing in state via useContext in FeedbackContext file;

// we removed handleDelete arg- FeedbackItem({ handleDelete }) because we're using useContext w/ FeedbackContext component to pass in the function with: const { deleteFeedback } = useContext(FeedbackContext);

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  //we took out the two state vars below because we're passing in app level via props
  // const [rating, setRating] = useState(0);
  // const [text, setText] = useState("type");

  //   below handleClick example goes with commented out button below

  //   const handleClick2 = () => {
  //     setRating(
  //       //passsing in a func below vs just var
  //       // e.g. setRating(20)
  //       //allows us to keep the previous item
  //       (prev) => {
  //         return prev + 1;
  //       }
  //     );
  //   };

  // const handleClick = (id) => {
  //   console.log(item.id);
  // };

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      {/* we can place a func directly into onClick, like so as well:
      () => console.log(item.id) 
      we changed onClick={() => handleDelete(item.id) from a passed in prop from app.js to a useContext state change via FeedbackContext deleteFeeback function*/}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>
      <button className="edit">
        {/* since we pass in item to onClick we're setting onClick to a function */}
        <FaEdit onClick={() => editFeedback(item)} color="purple"></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick2}>click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
