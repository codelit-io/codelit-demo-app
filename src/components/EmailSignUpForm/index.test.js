import React from "react";

import EmailSignUpForm from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("EmailSignUpForm Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<EmailSignUpForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
