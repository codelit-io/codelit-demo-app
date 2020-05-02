

import React from "react";

import Admin from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("Admin Component", () => {
	test("should match the snapshot", () => {
		renderer.render(<Admin />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	});
});
