import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import CoursesPage from ".";

const renderer = new ShallowRenderer();

describe("CoursesPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<CoursesPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
