import React from "react";

import Course from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("Course Component", () => {
	test("should match the snapshot", () => {
		renderer.render(<Course />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	});
});
