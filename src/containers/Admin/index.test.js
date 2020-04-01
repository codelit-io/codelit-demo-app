import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Admin from "./index.js";
import renderer from "react-test-renderer";

it("Admin Page", () => {
  const tree = renderer
    .create(
      <Router>
        <Admin />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
