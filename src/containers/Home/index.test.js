import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Home from "./index.js";
import renderer from "react-test-renderer";

it("Home Page", () => {
  const tree = renderer
    .create(
      <Router>
        <Home />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
