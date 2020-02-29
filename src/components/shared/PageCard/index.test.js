import React from "react";
import PageCard from "./index.js";
import renderer from "react-test-renderer";

it("Should render PageCard", () => {
	const tree = renderer.create(<PageCard />).toJSON();
	expect(tree).toMatchSnapshot();
});
