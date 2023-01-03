import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //multiple classnames for varients are NOT seperated by commas! Since we want a "conditional class" i.e. the card class "reverse" only if the reverse props above is passed in we change <div className="card reverse">{children}</div> to add a templete literal. That sets the classname to card and if the reverse prop is passed in is true then use/set the style to reverse.
  //Conditional Class example, references are global css:
  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  //Conditional Style example does not reference global css:
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

//below we've set default to true but since in FeebackItem.jsx we pass reverse as false it overrides the defualt below
Card.defaultProps = {
  reverse: true,
};

//import PropTypes p is Cap, when using lowercase
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
