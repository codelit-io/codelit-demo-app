import React from "react";

import EmailSignInForm from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("EmailSignInForm Component", () => {
	test("should match the snapshot", () => {
		renderer.render(<EmailSignInForm />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	});
});
