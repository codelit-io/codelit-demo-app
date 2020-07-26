import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import CoursesEditPage from ".";

const renderer = new ShallowRenderer();

describe("CoursesEditPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<CoursesEditPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
