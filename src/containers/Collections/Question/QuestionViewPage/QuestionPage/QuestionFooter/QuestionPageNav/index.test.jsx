import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import QuestionPageNav from ".";

const renderer = new ShallowRenderer();

describe("QuestionPageNav Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<QuestionPageNav />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
