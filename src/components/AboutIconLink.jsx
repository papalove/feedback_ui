import React from "react";
// Link import allows us not to use a tags w/href for internal links so as not to reload but to use client side ssr to load
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30}></FaQuestion>
      </Link>
    </div>
  );
}
export default AboutIconLink;
