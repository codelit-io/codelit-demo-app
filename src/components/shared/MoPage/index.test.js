import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import MoPage from "./index.js";
import renderer from "react-test-renderer";

it("Should render MoPage", () => {
  const tree = renderer
    .create(
      <Router>
        <MoPage />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
