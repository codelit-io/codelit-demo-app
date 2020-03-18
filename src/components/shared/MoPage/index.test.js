import React from "react";
import MoPage from "./index.js";
import renderer from "react-test-renderer";

it("Should render MoPage", () => {
  const tree = renderer.create(<MoPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
