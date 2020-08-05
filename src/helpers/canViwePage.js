/**
 * @author MoSkool
 * @version 1.0.0
 * @visibleName  useCanViewPage hook 🕵️‍♂️👩🏻‍🔬👩‍💻
 *
 * This React custom hook takes the userRole and history objects and redirects user if not authorized to view page
 *
 * @param {Object} history - Route history passed from parent component, used to push a new route
 * @param {Object} userRole - User role returns as {isAdmin: true, isAuthor: false, isStudent: false}
 * @returns {Object} - example return {canViewPage: true}
 *
 * EXAMPLE USAGE
 *
 * // set it as a constant
 * const canViewPage = canViewPage({ history, userRole })
 *
 * // set it in state
 * const [canViewPage] = useState(canViewPage({ history, userRole }))
 *
 * @see See [React custom hooks](https://reactjs.org/docs/hooks-custom.html)
 * */

import { NO_ACCESS } from "constants/routes";

const canViewPage = ({ history, userRole }) => {
  if (!userRole) {
    return { isLoggedIn: false };
  }

  // Admins can access all pages
  if (userRole.isAdmin) {
    return;
  }
  debugger;
  history.push(NO_ACCESS.path);
};

export default canViewPage;
