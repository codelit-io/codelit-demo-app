import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import SignUpForm from "./index.js";

const renderer = new ShallowRenderer();

describe("SignUpForm Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<SignUpForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
