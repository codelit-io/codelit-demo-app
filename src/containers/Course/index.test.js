import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import Course from "./index.jsx";

const renderer = new ShallowRenderer();

describe("Course Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Course />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
