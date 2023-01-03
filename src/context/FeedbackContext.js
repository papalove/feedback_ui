import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
//useState - sets and updated data while createContext & useContext propogate data

const FeedbackContext = createContext();

//data provider
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is item 1 from FeedbackContext.js",
      rating: 5,
    },
    {
      id: 2,
      text: "This item is item 2 from FeedbackContext.js",
      rating: 5,
    },
    {
      id: 3,
      text: "This item is item 3 from FeedbackContext.js",
      rating: 3,
    },
  ]);

  //editable state holding item and boolean of feedback form used by editFeeback function
  const [feedbackEditContainer, setFeedbackEditContainer] = useState({
    item: {},
    edit: false,
  });

  //function that selects and sets item to be edited for update
  const editFeedback = (item) => {
    setFeedbackEditContainer({
      item,
      edit: true,
    });
  };

  //update feedback function
  const updateFeedback = (id, updatedItem) => {
    console.log(id, updatedItem);
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  // state modifiers
  const addFeedback = (newFeedback) => {
    // newFeedback.id = uuidv4(); per uuid docs
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // any functions for manipulating data or useStates we pass in as value ={{}} prop objects
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback, // passing data in as value
        feedbackEditContainer: feedbackEditContainer, // passeses state in as value NOTE: editFeedback below updates setFeedbackEdit, working via useState with feedbackEdit. So, it's necessary to have feedbackEdit in this Provider.
        editFeedback: editFeedback, // passes function to update state as value
        updateFeedback: updateFeedback, //updates feedbackEditContainer in UI via editFeedback
        addFeedback: addFeedback, // passing function in as value
        deleteFeedback: deleteFeedback, // passing function in as value
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
