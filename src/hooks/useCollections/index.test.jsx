import React from "react";

import { renderHook } from "@testing-library/react-hooks";
import Firebase from "components/shared/Firebase";
import useCollections from ".";

jest.mock("components/shared/Firebase"); // SoundPlayer is now a mock constructor

let useEffect;

const mockUseEffect = () => {
  useEffect.mockImplementationOnce((f) => f());
};

beforeAll(() => {
  // Clear all instances and calls to constructor and all methods:
  Firebase.mockImplementation(() => ({
    collection: jest.fn().mockImplementation(() => ({
      where: jest.fn().mockImplementation(() => ({
        orderBy: jest.fn().mockImplementation(() => ({
          onSnapshot: jest.fn(),
        })),
      })),
    })),
  }));
});

/* mocking useEffect */
useEffect = jest.spyOn(React, "useEffect");

describe("the useCollections hook", () => {
  it("should grab data from firebase db", () => {
    beforeAll(() => {
      mockUseEffect();
    });
    // mock.instances is available with automatic mocks:
    const firebase = new Firebase();

    /* TODO return correct data */
    const mockReturn = { isLoading: true, isError: false, data: undefined };
    const { result, waitForNextUpdate } = renderHook(() =>
      useCollections({ collectionPath: "courses" }, firebase)
    );
    waitForNextUpdate();
    expect(result.current).toMatchObject(mockReturn);
  });
});
