import PropTypes from "prop-types";
import React from "react";

function Button({ children, varient, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${varient}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  varient: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  varient: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;
