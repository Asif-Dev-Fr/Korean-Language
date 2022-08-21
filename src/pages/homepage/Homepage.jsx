import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container">
      <div className="homepage">
        <Link to="/hangul">
          <Button variant="warning">Hangul List</Button>
          <Button variant="success">Hangul Quiz</Button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
