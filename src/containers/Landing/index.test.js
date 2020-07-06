import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import LandingPage from "./index.js";

const renderer = new ShallowRenderer();

describe("LandingPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<LandingPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
