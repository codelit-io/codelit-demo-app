import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import QuestionsEditPage from ".";

const renderer = new ShallowRenderer();

describe("QuestionsEditPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<QuestionsEditPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
