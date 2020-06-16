import * as ROLES from "constants/roles";

const useUserRole = (authUser) => {
	if (!authUser) {
		return { isLoggedIn: false };
	}

	return {
		isAdmin: authUser.roles && authUser.roles[ROLES.ADMIN] ? true : false,
		isAuthor: authUser.roles && authUser.roles[ROLES.AUTHOR] ? true : false,
		isStudent: authUser.roles && authUser.roles[ROLES.STUDENT] ? true : false,
	};
};

export default useUserRole;
