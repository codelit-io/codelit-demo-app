

import React from "react";

import Account from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("Account Component", () => {
	test("should match the snapshot", () => {
		renderer.render(<Account />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	});
});
