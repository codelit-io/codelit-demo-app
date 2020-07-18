import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PageNotFound } from "assets/page_not_found.svg";

const NotFound = () => (
  <div>
    <PageNotFound
      style={{
        width: "100%",
        display: "block",
        margin: "auto",
        position: "relative"
      }}
      alt="Page Not Found"
    />
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);
export default NotFound;
