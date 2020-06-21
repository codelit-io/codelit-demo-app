import React from "react";
import renderer from "react-test-renderer";
import MoButton from "./index.js";

it("Should render MoButton", () => {
  const tree = renderer.create(<MoButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
