import React from "react";

import ShallowRenderer from "react-test-renderer/shallow";
import Account from "./index.jsx";

const renderer = new ShallowRenderer();

describe("Account Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Account />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
