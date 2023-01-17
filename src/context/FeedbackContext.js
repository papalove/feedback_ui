// import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";
//useState - sets and updated data while createContext & useContext propogate data

const FeedbackContext = createContext();

//data provider
//state:
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  //took out our hard coded data that was in the now empty useState([]) array
  const [feedback, setFeedback] = useState([]);
  //editable state, holding item and boolean of feedback form used by editFeeback function
  const [feedbackEditContainer, setFeedbackEditContainer] = useState({
    item: {},
    edit: false,
  });

  //useEffect runs state/data updates as soon as page loads
  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch "feedback" data
  //NOTE: ?_sort=id&_order=desc addded to url allows for query param sort by descending ID order
  const fetchFeedback = async () => {
    const response = await fetch(
      // added proxy to package.json so deleted http://localhost:5000 from below:
      "/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  // state modifiers
  //add item:
  const addFeedback = async (newFeedback) => {
    // per proxy we added in package.json only need /feedback instead of full url
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    // newFeedback.id = uuidv4();
    console.log(newFeedback);
    // below we replaced newFeedback with data as now the feedback is coming from backend
    setFeedback([data, ...feedback]);
  };

  // delete item
  const deleteFeedback = async (id) => {
    if (window.confirm("you sure?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //function that selects and sets item to be edited for update
  const editFeedback = (item) => {
    setFeedbackEditContainer({
      item,
      edit: true,
    });
  };

  //update feedback function
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();

    console.log(id, updatedItem);
    //changed ...updatedItem to ...data since it's now coming from server
    setFeedback(feedback.map((item) => (item.id === id ? data : item)));

    setFeedbackEditContainer({
      item: {},
      edit: false,
    });

    // setFeedback(
    //   feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    // );
  };

  // any functions for manipulating data or useStates we pass in as value ={{}} prop objects
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback, // passing data in as value
        feedbackEditContainer: feedbackEditContainer, // passeses state in as value NOTE: editFeedback below updates setFeedbackEdit, working via useState with feedbackEdit. So, it's necessary to have feedbackEdit in this Provider.
        isLoading: isLoading, //passes state of loading for spinner
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
