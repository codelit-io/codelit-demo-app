import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import Home from "./index.js";

const renderer = new ShallowRenderer();

describe("Home Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Home />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
