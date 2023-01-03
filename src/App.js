//App.js is root component passed into index.js

// import { useState } from "react";because no longer using it to import feedbackData json file with: const [feedback, setFeedback] = useState(FeedbackData)

// import { v4 as uuidv4 } from "uuid"; no longer being used bcs we brought it into Feedback Context along with addFeedback
//can call uuid as a function to generate new id
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Card from "./components/shared/Card";

import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
// import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./components/pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import Post from "./components/Post";
// opt 1: set prop in element or   <Header text="helloWorld"></Header>
// opt 2: make dynamic by setting default prop in Heaer.jsx and remove text="helloWorld"

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData); as we're no longer using FeedbackData json file

  // const deleteFeedback = (id) => {
  //   if (window.confirm("you sure?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  // const addFeedback = (newFeedback) => {
  //   // newFeedback.id = uuidv4(); per uuid docs
  //   newFeedback.id = uuidv4();
  //   console.log(newFeedback);
  //   setFeedback([newFeedback, ...feedback]);
  // };

  return (
    <FeedbackProvider>
      <Router>
        <>
          <Header text="voteUI"></Header>
          <div className="container">
            <h1>my vote</h1>

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    {/* we removed handleAdd={addFeedback} prop and value from below  <FeedbackForm handleAdd={addFeedback}></FeedbackForm>) because we moved addFeedback function from app.js to FeedbackContext component. We used these together with useState as global state in app.js */}
                    <FeedbackForm></FeedbackForm>
                    {/* currently for both FeedbackStats and Feedback List the prop feedback and value feedback are not being passed into their respective components. Instead we are using useContext via wrapping app in FeedbackProvider to get feedback. Therefore in below FeedbackStats and FeedbackList components the prop: <FeedbackStats feedback={feedback}> has been removed and we are not using the FeedbackData json file above*/}
                    <FeedbackStats></FeedbackStats>
                    <FeedbackList
                      // removed deleteFeedback from below handleDelete={deleteFeedback} because we commented out the function above and moved it to FeedbackContext and wrapped our app FeedbackProvider element

                      handleDelete
                    ></FeedbackList>
                  </>
                }
              ></Route>
              {/* as of v.6 react-router-dome we use element (instead of component) and add jsx < /> around it as well as wrap all <Route> tags in imported <Routes>  */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/post/*" element={<Post />} />
            </Routes>

            <Card>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
              <NavLink to="/post" activeclassname="active">
                Post
              </NavLink>
            </Card>
            <AboutIconLink></AboutIconLink>
          </div>
        </>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
