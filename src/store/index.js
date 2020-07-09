/* Initial State goes here */

import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "../actions";

const initialState = {
  collections: [],
  courses: [],
  authUser: null
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
