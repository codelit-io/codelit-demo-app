import React from "react";

export const Css = ({ topic }) => {
	return (
		<>
			<h1>{topic}</h1>
			<pre>
				<code>{"<p class='paragraph'> I am a paragraph </p>"}</code>
			</pre>
			<pre>
				<code>{".paragraph {}"}</code>
			</pre>
		</>
	);
};

export default Css;
