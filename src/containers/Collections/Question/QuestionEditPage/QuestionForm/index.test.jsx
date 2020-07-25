import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import QuestionForm from ".";

const renderer = new ShallowRenderer();

describe("QuestionForm Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<QuestionForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
