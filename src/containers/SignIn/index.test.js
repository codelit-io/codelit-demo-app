import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import SignInPage from "./index.js";

it("Sign In Page", () => {
  const tree = renderer
    .create(
      <Router>
        <SignInPage />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
