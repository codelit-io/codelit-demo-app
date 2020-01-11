import React from "react";
import Learn from "./index.js";
import renderer from "react-test-renderer";

it("Learn Page", () => {
	const tree = renderer.create(<Learn />).toJSON();
	expect(tree).toMatchSnapshot();
});
