import React from "react";
import Admin from "./index.js";
import renderer from "react-test-renderer";

it("Admin Page", () => {
  const tree = renderer.create(<Admin />).toJSON();
  expect(tree).toMatchSnapshot();
});
