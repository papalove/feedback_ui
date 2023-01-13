import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

// if we add feedback as an arg to FeedbackList({ }) then our data is coming in as a prop passed from our FeedbackList element in app.js.
// But if we remove the arg and use useContext then "feedback" data is coming from FeedbackContext.jsx. NOTE: that when feedback is not coming in as a prop but as Context we no longer need PropTypes.

//since data is no longer passed through app.js but via FeedbackContext, we removed handleDelete prop in app.js and no longer need to pass it in to function FeedbackList({ handleDelete })
function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>no feedback yet</p>;
  }

  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* we add key above and below beceause we return list */}
            <FeedbackItem
              key={item.id}
              item={item}
              // handleDelete={handleDelete}
            ></FeedbackItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         //below connects handlDelete in Feedback Item to Feedback List ONLY
  //         // handleDelete={(id) => console.log(id)}
  //         // to connect handleDelete from FI through FL to data in App.js we pass in handleDelete from App.js in here, FL.
  //         handleDelete={handleDelete}
  //       ></FeedbackItem>
  //     ))}
  //   </div>
  // );
}

FeedbackList.propTypes = {
  // feedback: PropTypes.array.isRequired, or can specify the object array's props by:
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
