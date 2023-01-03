//App.js is root component passed into index.js
//The below App.JS uses a function decleration or named function to return
a ul w/ li that use .map to loop to list all comments and pass vars dynamically with {}, additionally we use a conditional to show/hide data.

import React from "react";

const title = "Blog post";
const body = "this is my blog post";
const comments = [
{ id: 1, text: "comment one" },
{ id: 2, text: "comment two" },
{ id: 3, text: "comment three" },
];

const showComments = true;
const commentBlock = (

  <div className="comments">
    <h3>Comments ({comments.length})</h3>
    {/* loop through comments and list text */}
    <ul>
      {/* when creating list must add child prop to element */}
      {comments.map((comment, index) => (
        <li key={index}>{comment.text} </li>
      ))}
    </ul>
  </div>
);

function App() {
return (
<div>
{/_ //below was created using emmet .myClass _/}
<div className="container">
<h1>{title.toUpperCase}</h1>
<p>{body}</p>

        {showComments ? commentBlock : null}

        {/* below uses emmet ". label"
    <label htmlFor=""></label> */}
      </div>
    </div>

);
}

export default App;
