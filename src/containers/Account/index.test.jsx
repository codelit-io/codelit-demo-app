import React from "react";

import Account from "./index.jsx";
import ShallowRenderer from "react-test-renderer/shallow";
import useGlobal from "store";
import useGlobalHook from "use-global-hook";

beforeEach(() => {
  useGlobal.mockClear();
  useGlobalHook.mockClear();
});

afterEach(() => {
  jest.restoreAllMocks();
});

// Mock functionality of global and store hooks
jest.mock("store", () => jest.fn().mockReturnValue([]));
jest.mock("use-global-hook", () => jest.fn());

const renderer = new ShallowRenderer();

describe("Account Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<Account />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
