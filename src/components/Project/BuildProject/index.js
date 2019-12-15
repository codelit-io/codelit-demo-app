import React from "react";

export const BuildProject = ({ match }) => {
	return <h1>{match.params.type}</h1>;
};
