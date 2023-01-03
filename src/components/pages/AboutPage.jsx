import React from "react";
import { Link } from "react-router-dom";

import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut velit
          vero itaque alias in reprehenderit voluptate libero eveniet! Veritatis
          voluptates voluptate officia tempora sunt incidunt labore nostrum
          maxime excepturi!
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
