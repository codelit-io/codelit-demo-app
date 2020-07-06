import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import SignInForm from "./index.js";

const renderer = new ShallowRenderer();

describe("SignInForm Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<SignInForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
