import React from "react";
import MoLink from "./index.js.js";
import renderer from "react-test-renderer";

it("Should render MoLink", () => {
  const tree = renderer.create(<MoLink />).toJSON();
  expect(tree).toMatchSnapshot();
});
