import React from "react";

import Playground from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("Playground Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Playground />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
