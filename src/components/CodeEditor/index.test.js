import React from "react";

import CodeEditor from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("CodeEditor Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<CodeEditor />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
