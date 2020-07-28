import React from "react";

import SignUpForm from ".";
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

describe("SignUpForm Component", () => {
  test("should match the snapshot", () => {
    renderer.render(<SignUpForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
