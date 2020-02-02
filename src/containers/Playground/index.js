import React, { useState } from "react";

import CodeEditor from "../../components/CodeEditor";
import PageHeader from "../../components/shared/PageHeader";

const Playground = () => {
	const [question] = useState({
		answer: "<button> I am a Button </button>",
		element: "button",
		id: "0",
		isCorrect: false,
		label: "Write JSX code",
		slug: "Fix-Html-button-tag-syntax",
        question: `<section>
    <h1>I am a Heading 1</h1>

    <p>I am a Paragraph</p>

    <button>I am a button</button>

    <input type="text" placeholder="I am a text input"/>
</section>`,
		status: "😴",
		isPlayground: true
	});

    const setIsCorrect = () => {
        return;
    }
	return (
		<>
			<PageHeader img="" title="React Playground" />
			<CodeEditor question={question} setIsCorrect={setIsCorrect}/>
		</>
	);
};

export default Playground;
