/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName  useUserRole hook 🕵️‍♂️👩🏻‍🔬👩‍💻
 *
 * This React custom hook takes the authUser object and returns a boolean to indicate user role
 *
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @returns {Object} - example return {isAdmin: true, isAuthor: false, isStudent: false}
 *
 * EXAMPLE USAGE
 *
 * // set it as a constant
 * const userRole = useUserRole(authUser)
 *
 * // set it in state
 * [userRole] = useState(useUserRole(authUser))
 *
 * @see See [React custom hooks](https://reactjs.org/docs/hooks-custom.html)
 * */

import * as ROLES from "constants/roles";

const useUserRole = authUser => {
  if (!authUser) {
    return { isLoggedIn: false };
  }

  return {
    isAdmin: !!(authUser.roles && authUser.roles[ROLES.ADMIN]),
    isAuthor: !!(authUser.roles && authUser.roles[ROLES.AUTHOR]),
    isStudent: !!(authUser.roles && authUser.roles[ROLES.STUDENT])
  };
};

export default useUserRole;
