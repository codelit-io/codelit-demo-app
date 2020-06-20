import React from "react";
import renderer from "react-test-renderer";
import App from "./index";

it("Should render App", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
