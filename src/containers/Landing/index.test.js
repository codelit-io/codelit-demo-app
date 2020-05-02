import React from "react";

import LandingPage from "./index.js";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("LandingPage Component", () => {
	test("should match the snapshot", () => {
		renderer.render(<LandingPage />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	});
});
