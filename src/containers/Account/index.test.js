import React from "react";

import Account from "./index.js";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders Account Page", () => {
  const tree = renderer
    .create(
      <Router>
        <Account />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
