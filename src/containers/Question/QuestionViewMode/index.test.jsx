import React from "react";

import Question from "./index.jsx";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

const mockDataPercentage = {
	100: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input className='newTitle' type='text'/>",
	},
	90: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input  className='title'  type='text'/>",
	},
	80: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input class='title' type='text'/>",
	},
	70: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input class='title' type='text'/>",
	},
	60: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input type='text'/>",
	},
	50: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input type='text'/>",
	},
	40: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input type='submit'/>",
	},
	30: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input type='submit'/>",
	},
	20: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input/>",
	},
	10: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "<input/>",
	},
	0: {
		correctAnswer: "<input className='newTitle' type='text'/>",
		userAnswer: "",
	},
};

describe("Question Component", () => {
	test("should match the snapshot", () => {
		renderer.render(<Question />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	});
});