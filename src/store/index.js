import React from "react";

import * as actions from "actions";
import { initialState } from "./initialState";
import useGlobalHook from "use-global-hook";

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
