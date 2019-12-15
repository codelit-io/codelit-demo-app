import React from "react";
import { create } from "react-test-renderer";

const Component = props => {
	return <div> Component </div>;
};

describe("Project Component", () => {
	test("Matches the snapshot", () => {
		const component = create(<Component />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
