import React from "react";
import Landing from "./index.js";
import renderer from "react-test-renderer";

it("Landing Page", () => {
	const tree = renderer.create(<Landing />).toJSON();
	expect(tree).toMatchSnapshot();
});
