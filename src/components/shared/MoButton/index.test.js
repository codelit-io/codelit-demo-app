import React from "react";
import MoButton from "./index.js";
import renderer from "react-test-renderer";

it("Should render MoButton", () => {
	const tree = renderer.create(<MoButton />).toJSON();
	expect(tree).toMatchSnapshot();
});
