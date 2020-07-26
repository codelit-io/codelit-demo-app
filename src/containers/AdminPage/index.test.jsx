import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import Admin from "./index.jsx";

const renderer = new ShallowRenderer();

describe("Admin Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Admin />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
