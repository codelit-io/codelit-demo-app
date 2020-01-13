import React from "react";
import { Component } from "../../Component";
import renderer from "react-test-renderer";

it("Project Component", () => {
	const tree = renderer.create(<Component />).toJSON();
	expect(tree).toMatchSnapshot();
});
