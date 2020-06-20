import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import MoPage from "./index.js";

const renderer = new ShallowRenderer();

describe("MoPage Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<MoPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
