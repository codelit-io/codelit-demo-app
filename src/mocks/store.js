// Mock functionality of global and store hooks

export const storeMock = jest.mock("store", () =>
  jest.fn().mockReturnValue([{ state: { authUser: null } }])
);
export const globalHookMock = jest.mock("use-global-hook", () => jest.fn([]));
