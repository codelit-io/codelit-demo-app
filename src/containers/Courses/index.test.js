import React from "react";

import Courses from "./index.jsx";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("Courses Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Courses />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
