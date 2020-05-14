import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import MoLinkButton from "./index";

it("Should render MoLinkButton", () => {
  const tree = renderer
    .create(
      <Router>
        <MoLinkButton />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
