import React from "react";
import SignInPage from "./index.js";
import renderer from "react-test-renderer";

it("Sign In Page", () => {
  const tree = renderer.create(<SignInPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
