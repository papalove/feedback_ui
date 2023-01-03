import React from "react";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelector from "./RatingSelector";
import Card from "./shared/Card";
import Button from "./shared/Button";

//took { handleAdd } out of function FeedbackForm({ handleAdd }) bcs no longer passing it in as prop using useState in app.js. Instead we're using useContext in FeedbackContext.jsx.
function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(4);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEditContainer, updateFeedback } =
    useContext(FeedbackContext);

  //useEffect takes in two args callback function and array of dependencies which if change run function. if left blank, function only runs when loads
  useEffect(() => {
    console.log("hi"); //often used for api fetch data request
    if (feedbackEditContainer.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEditContainer.item.text);
      setRating(feedbackEditContainer.item.rating);
    }
  }, [feedbackEditContainer]);

  const handleTextChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
      //   .trim() deletes spaces
      //   currently something is bugged with the no. count
    } else if (text.trim().length < 10) {
      setMessage("input must be 10 letters or longer");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    console.log(event.target.value);
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      if (feedbackEditContainer.edit === true) {
        updateFeedback(feedbackEditContainer.item.id, newFeedback);
      } else {
        // changed handleAdd per above note (no longer prop coming in from app.js) to addFeedback func. via FeedbackContext
        addFeedback(newFeedback);
      }
    } else if (text.trim().length <= 10) {
      setMessage("input must be 10 letters or longer");
      setBtnDisabled(true);
    }
    setText("");
  };

  return (
    <Card>
      Rate this film:
      <form onSubmit={handleSubmit}>
        {/* TODO: rating select comp */}
        <RatingSelector select={(rating) => setRating(rating)}></RatingSelector>
        {/* emmet: div.input-group */}
        <div className="input-group">
          {/* emmet: input.text  */}
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write review"
            value={text}
          />
          {/* emmet button:submit prints "type" insted of button.submit printing className
        This can be added as prop in button varient="secondary" 
         */}
          <Button type="submit" isDisabled={btnDisabled}>
            submit
          </Button>
        </div>
        {/* validation message prompt if text input is less than 10 */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
export default FeedbackForm;
