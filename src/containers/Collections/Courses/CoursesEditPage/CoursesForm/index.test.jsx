import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import CoursesForm from ".";

const renderer = new ShallowRenderer();

describe("CoursesForm Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<CoursesForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
