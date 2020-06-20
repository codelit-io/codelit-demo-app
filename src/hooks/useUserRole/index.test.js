import { renderHook } from "@testing-library/react-hooks";
import useUserRole from ".";
import { authUser, userRole } from "mocks/user";

describe("the useUserRole hook", () => {
  it("should return user roles", () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useUserRole(authUser)
    );
    waitForNextUpdate();
    expect(result.current).toMatchObject(userRole);
  });
});
