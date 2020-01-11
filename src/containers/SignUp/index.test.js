import React from "react";
import SignUpPage from "./index.js";
import renderer from "react-test-renderer";

it("Sign Up Page", () => {
	const tree = renderer.create(<SignUpPage />).toJSON();
	expect(tree).toMatchSnapshot();
});
