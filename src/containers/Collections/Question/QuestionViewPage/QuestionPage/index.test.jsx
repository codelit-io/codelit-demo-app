import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import QuestionPage from ".";

const renderer = new ShallowRenderer();

describe("QuestionPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<QuestionPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
