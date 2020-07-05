import { renderHook } from '@testing-library/react-hooks';
import { authUser, userRole } from 'mocks/user';
import useUserRole from '.';

describe('the useUserRole hook', () => {
  it('should return user roles', () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useUserRole(authUser),
    );
    waitForNextUpdate();
    expect(result.current).toMatchObject(userRole);
  });
});
