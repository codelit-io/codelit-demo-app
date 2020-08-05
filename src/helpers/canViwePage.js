/**
 * @author MoSkool
 * @version 1.0.0
 * @visibleName  useCanViewPage hook 🕵️‍♂️👩🏻‍🔬👩‍💻
 *
 * This React custom hook takes the userRole and history objects and redirects user if not authorized to view page
 *
 * @param {Object} history - Route history passed from parent component, used to push a new route
 * @param {string} isRole - Type of role the page should let access to, isAdmin, isStudent, isLoggedIn
 * @param {Object} userRole - User role returns as {isAdmin: true, isAuthor: false, isStudent: false}
 * @returns {Object} - example return {canViewPage: true}
 *
 * EXAMPLE USAGE
 *
 * // set it as a constant
 * const canViewPage = canViewPage({ isRole, history, userRole })
 *
 * // set it in state
 * const [canViewPage] = useState(canViewPage({ isRole, history, userRole }))
 *
 * @see See [React custom hooks](https://reactjs.org/docs/hooks-custom.html)
 * */

import { NO_ACCESS, SIGN_UP } from "constants/routes";

const canViewPage = ({ history, userRole }) => {
  if (!history && !userRole) {
    return false;
  }
  console.log(userRole);
  // Admins can access all pages
  if (userRole?.isAdmin) {
    return;
  }

  if (userRole?.isLoggedIn) {
    history.push(NO_ACCESS.path);
  } else {
    /* TODO: Make this work BROKEN! */
    history.push(SIGN_UP.path);
  }

  // return false to prevent page from rendering
  return false;
};

export default canViewPage;
