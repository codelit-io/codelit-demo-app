import React from "react";

// Dependencies under test
import useGlobal from "store";
import useGlobalHook from "use-global-hook";

import { renderHook } from "@testing-library/react-hooks";

import { initialState } from "store/initialState";
import actions from "actions";

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

describe("store", () => {
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
});
