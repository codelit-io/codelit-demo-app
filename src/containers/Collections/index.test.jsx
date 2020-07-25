import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import Collections from ".";

const renderer = new ShallowRenderer();

describe("Collections Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Collections />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
