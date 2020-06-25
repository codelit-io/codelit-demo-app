import React from "react";
import Question from ".";

import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();
describe("Playground Component", () => {
	test("should match the snapshot", () => {
		renderer.render(<Question />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	});
});
