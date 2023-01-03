//impt
import React from "react";
import PropTypes from "prop-types";

//1) ext: rfce below NOT rafce 2) .container

//we can destructure Header (props), i.e. ({text,})
function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor, //uses defaultProps below
    color: "white", //overrides defaultProps below
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "header feedbackUI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

//not cap of p and P
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
