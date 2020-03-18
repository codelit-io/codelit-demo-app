import React from "react";
import Home from "./index.js";
import renderer from "react-test-renderer";

it("Home Page", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
