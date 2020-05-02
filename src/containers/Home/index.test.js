import React from "react";

import Home from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("Home Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Home />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
