import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Card from "./shared/Card";

function Post() {
  //   const params = useParams;

  //   const status = 404;

  //   if (status === 404) {
  //     return;
  //     <Navigate to="/notfound" />;
  //   }

  const navigate = useNavigate();

  const onClick = () => {
    console.log("hi");
    navigate("/post/show");
  };

  return (
    <div>
      {/* This code works with import useParams above commented out and Navigate import deleted from above import from "react-router-dom. This type of redirect works via page navigation, i.e. if you go to a 404 page for example. Below type of redirect useNavigate works within a function. E.g. if you wanted to update something on a server and than go to a new page."
      <h1>Post:{params.id}</h1>
      <h1>Name:{params.name}</h1> */}
      <button onClick={onClick}>This takes us to post/show.</button>
      <Routes>
        {/* the route we intend below is post/show so in app.js we add an * 
        we've generically inserted an h1 element but it would typically be a component*/}
        <Route
          path="/show"
          element={
            <Card>
              This card demos how to show an element specific to route. It is
              only seen on http://localhost:3000/post/show.
            </Card>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default Post;
