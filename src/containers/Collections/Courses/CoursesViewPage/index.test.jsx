import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import CoursesViewPage from ".";

const renderer = new ShallowRenderer();

describe("CoursesViewPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<CoursesViewPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
