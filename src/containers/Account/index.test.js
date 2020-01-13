import React from "react";
import Account from "./index.js";
import renderer from "react-test-renderer";

it("renders Account Page", () => {
	const tree = renderer.create(<Account />).toJSON();
	expect(tree).toMatchSnapshot();
});
