import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/NotFound%2Fnot-found.jpg?alt=media&token=7817c705-6aea-4362-b8ae-eb0c3dcabd0c"
      style={{
        width: '60%',
        display: 'block',
        margin: 'auto',
        position: 'relative',
      }}
      alt="Page Not Found"
    />
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);
export default NotFound;
