import React from "react";
import SignUpForm from "./index";

import { initialState } from "store/initialState";

// Dependencies under test
import ShallowRenderer from "react-test-renderer/shallow";
import useGlobal from "store";
import useGlobalHook from "use-global-hook";

import { renderHook } from "@testing-library/react-hooks";

import actions from "actions";
import { props } from "mocks/props";

// Shallow render to test the component without it's children
const renderer = new ShallowRenderer();

// Mock functionality of global and store hooks
jest.mock("store", () =>
  jest.fn().mockReturnValue([{ state: { authUser: null } }])
);
jest.mock("use-global-hook", () => jest.fn([]));

beforeEach(() => {
  useGlobal.mockClear();
  useGlobalHook.mockClear();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("SignUpForm Component", () => {
  test("Should import and invoke useGlobal", () => {
    // Call useGlobal hook
    const { result, waitForNextUpdate } = renderHook(() =>
      useGlobal(React, initialState, actions)
    );
    // Wait for renders
    waitForNextUpdate();
    expect(result.current).toBeDefined();
    expect(useGlobal).toHaveBeenCalledWith(React, initialState, actions);
  });

  test("should match the snapshot", () => {
    renderer.render(<SignUpForm {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
