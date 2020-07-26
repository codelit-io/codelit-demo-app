import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import QuestionsViewPage from ".";

const renderer = new ShallowRenderer();

describe("QuestionsViewPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<QuestionsViewPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
