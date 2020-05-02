import React from "react";

import SignUpForm from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("SignUpForm Component", () => {
	test("should match the snapshot", () => {
		renderer.render(<SignUpForm />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	});
});
