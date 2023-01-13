import React from "react";
import { Link } from "react-router-dom";

import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          This app uses useContext to propogate date, useState to set state, and
          useEffect to edit and update state. JSON server REST api's
          (GET,POST,PUT,DELETE)
        </p>
        <p>
          <Link to="/">Back Home</Link>
          {/* if we want to add multiple props to link: 
          
          <Link to={{
            pathname: '/about',
            search: "?sort=name", //this is a query param
            hash: '#about',
          }}</Link>
          
          
           */}
        </p>
      </div>
    </Card>
  );
}
export default AboutPage;
