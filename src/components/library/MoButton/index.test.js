import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import MoButton from "./index.js";

const renderer = new ShallowRenderer();

describe("MoButton Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<MoButton />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
