import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import QuestionEditPage from ".";

const renderer = new ShallowRenderer();

describe("QuestionEditPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<QuestionEditPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
