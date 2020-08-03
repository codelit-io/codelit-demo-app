import React from "react";
import CoursesEditPage from "./index";

// Dependencies under test
import ShallowRenderer from "react-test-renderer/shallow";
import useGlobal from "store";
import useGlobalHook from "use-global-hook";

import { renderHook } from "@testing-library/react-hooks";

import actions from "actions";

// Shallow render to test the component without it's children
const renderer = new ShallowRenderer();

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

describe("CoursesEditPage Component", () => {
  // test("should match the snapshot", () => {
  //   renderer.render(<CoursesEditPage />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  // });
  const initialState = {
    authUser: {},
    collections: {},
    courses: [],
    themeOptions: {
      isDarkMode: false
    },
    firebase: {}
  };
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
