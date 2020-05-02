import React from "react";

import SignInForm from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("SignInForm Component", () => {
	test("should match the snapshot", () => {
		renderer.render(<SignInForm />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	});
});
