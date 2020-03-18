import React from "react";
import LandingPage from "./index.js";
import renderer from "react-test-renderer";

it("Landing Page", () => {
  const tree = renderer.create(<LandingPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
