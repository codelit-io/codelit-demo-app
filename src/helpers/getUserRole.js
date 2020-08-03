import * as ROLES from "constants/roles";

const getUserRole = authUser => {
  if (!authUser) {
    return { isLoggedIn: false };
  }

  return {
    isAdmin: !!(authUser.roles && authUser.roles[ROLES.ADMIN]),
    isAuthor: !!(authUser.roles && authUser.roles[ROLES.AUTHOR]),
    isStudent: !!(authUser.roles && authUser.roles[ROLES.STUDENT])
  };
};

export default getUserRole;
