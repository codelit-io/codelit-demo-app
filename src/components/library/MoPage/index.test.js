import React from "react";

import MoPage from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("MoPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<MoPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
