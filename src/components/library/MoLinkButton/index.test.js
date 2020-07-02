import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import MoLinkButton from "./index.js";

const renderer = new ShallowRenderer();

describe("MoLinkButton Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<MoLinkButton />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
