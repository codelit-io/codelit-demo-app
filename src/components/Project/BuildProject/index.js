import React from "react";
import { Component } from "./Component";

export const BuildProject = ({ match }) => {
    
	return (
        <Component {...match.params}></Component>
    );
};
