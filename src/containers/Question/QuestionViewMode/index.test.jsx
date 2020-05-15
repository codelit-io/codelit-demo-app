import React from "react";

import Question from "./index.jsx";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("Question Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Question />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
